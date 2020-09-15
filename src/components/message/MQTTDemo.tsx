// src/components/MQTTDemoApp.tsx

import React, {useEffect} from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Button,
  ActivityIndicator,
  //Alert,
  //ScrollView,
  //SafeAreaView,
  //StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

//import AppHeader from './AppHeader';
import AddMessage from './AddMessage';

import {connect} from 'react-redux';
import {
  onMessageAdded,
  onMessageDeleted,
  loadMessages,
  loadMessagesStarted,
  loadMessagesSuccess,
  loadMessagesError,
} from './actions';

// Screen: MQTTDemo
const MQTTDemo = ({
  messages,
  addMessage,
  deleteMessage,
  getMessages,
  onLoadMessagesStarted,
  onLoadMessagesSuccess,
  onLoadMessagesError,
  navigation,
}) => {
  useEffect(() => {
    //Notice: getMessages() is a function that return an asynce function
    // It must be used together with redux-thunk middleware

    // option 1) it can be called directly like so
    getMessages();

    // Option 2) or alternatively, call asynchronous code in useEffect
    // using an IIFE (https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)
    //
    // (async function myFunc() {
    //   await getMessages();
    // })();

    // // Option 3)
    // onLoadMessagesStarted();
    // fetch('https://reactnative.dev/movies.json')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     onLoadMessagesSuccess(json.movies);
    //   })
    //   .catch((error) => {
    //     onLoadMessagesError(error);
    //   });

    console.log('i am here');

    return () => {
      console.log('useEffect() clean up');
    };
  }, [getMessages]);

  // try {
  //   const taskResponse = await fetch('https://reactnative.dev/movies.json');
  //   const json = await taskResponse.json();
  //   onLoadMessagesSuccess(json.movies);
  // } catch (error) {
  //   onLoadMessagesError(error.message);
  // }

  // return () => {
  //   console.log('useEffect() clean up');
  // };

  return (
    <View style={styles.container}>
      <View style={[styles.column, styles.header, styles.one]}>
        {/* <AppHeader
          style={[styles.row, styles.header, styles.one]}
          title={'React Native MQTT'}
          iconUri={'https://reactnative.dev/docs/assets/p_cat1.png'}
        /> */}
        <Text>Details Screen</Text>
        <Button
          title="Go to `this screen... again"
          onPress={() => navigation.push('MQTTDemo')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go to Top screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
      <View style={[styles.row, styles.main, styles.four]}>
        <AddMessage onAddMessage={addMessage} />
        {/* {isLoading ? (
          <ActivityIndicator />
        ) : ( */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.listItemView}>
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
              <Icon
                name="remove"
                size={20}
                color="firebrick"
                //onPress={() => deleteMessage(item.id)}
                onPress={() => {
                  console.log(item);
                  console.log(`item.id = ${item.id}`);
                  deleteMessage(item.id);
                }}
                style={styles.iconView}
              />
            </View>
          )}
        />
        {/* )} */}
      </View>
      <View style={[styles.row, styles.footer, styles.one]}>
        <Text>{'FOOTER'}</Text>
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  // basics layout style
  container: {
    flex: 1,
  },
  column: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    justifyContent: 'space-between', // Evenly space off children across the container's main axis, distributing the remaining space between the children.
    marginBottom: 5,
  },

  box: {
    flex: 1,
    height: 50,
    width: 50,
    backgroundColor: '#333',
  },

  box2: {
    backgroundColor: 'green',
  },

  box3: {
    backgroundColor: 'orange',
  },

  // 'flex' will define how your items are going to “fill” over the available space along your main axis.
  one: {
    flex: 1,
  },
  two: {
    flex: 2,
  },
  four: {
    flex: 4,
  },

  //! specific styles

  header: {
    //backgroundColor: 'darkslateblue',
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  main: {
    backgroundColor: 'skyblue',
    borderColor: 'blue',
    borderWidth: 5,
  },

  footer: {
    backgroundColor: 'steelblue',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  listItemView: {
    marginLeft: 5,
    marginRight: 5,
    padding: 15,
    backgroundColor: '#dce2ff',
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'column',
  },

  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 70,
  },
});

/**
 * Let mapStateToProps Reshape the Data from the Store
 * https://react-redux.js.org/using-react-redux/connect-mapstate#defining-mapstatetoprops
 * @param {state}     state  is the entire Redux store state e.g. store.getState()
 * @param {ownProps}  ownProps will contain all of the props given to the wrapper component that was generated by connect.
 * @return {Object}   return a plain object that contains the data the component needs:
 */
const mapStateToProps = (state /*, ownProps?*/) => {
  // return a state object
  return {
    messages: state.messageReducer.messages,
    //isLoading: state.messageReducer.isLoading,
  };
};

// The app code will dispatch these actions to the Redux store,
const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
    deleteMessage: (msgId: string) => dispatch(onMessageDeleted(msgId)),
    addMessage: (msgText: string) => dispatch(onMessageAdded(msgText)),
    getMessages: () => dispatch(loadMessages()), // exec this in useEffect() will run non-stop
    onLoadMessagesStarted: () => dispatch(loadMessagesStarted()),
    onLoadMessagesSuccess: (messages) =>
      dispatch(loadMessagesSuccess(messages)),
    onLoadMessagesError: (errorText) => dispatch(loadMessagesError(errorText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MQTTDemo); // injects state and dispatch actions
