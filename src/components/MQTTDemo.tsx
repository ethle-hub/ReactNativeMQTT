/* eslint-disable no-shadow */
// src/components/MQTTDemoApp.tsx

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  //ActivityIndicator,
  //Alert,
  //ScrollView,
  //SafeAreaView,
  //StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {v4 as uuidv4} from 'uuid';

import AppHeader from './AppHeader';
import AddMessage from './AddMessage';

import {connect} from 'react-redux';
import {deleteMessage, addMessage} from '../actions/message';

// component
const MQTTDemo = ({messages, deleteMessage, addMessage}) => {
  /*
   * BEFORE USING REDUX STORE
   */

  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://reactnative.dev/movies.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json.movies)) // e.g. "movies": [{ "id": "1", "title": "Star Wars", "releaseYear": "1977" },]
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  // functions

  // const renderMessageItem = ({item}) => (
  //   <View style={styles.listItemView}>
  //     <Text>
  //       {item.title}, {item.releaseYear}
  //     </Text>
  //     <Icon
  //       name="remove"
  //       size={20}
  //       color="firebrick"
  //       onPress={() => this.props.delete(item.id)}
  //       style={styles.iconView}
  //     />
  //   </View>
  // );

  // const addMessage = (text) => {
  //   if (!text) {
  //     Alert.alert(
  //       'No item entered',
  //       'Please enter an movie title to your list',
  //       [
  //         {
  //           text: 'ok',
  //           style: 'cancel',
  //         },
  //       ],
  //       {cancelable: true},
  //     );
  //   } else {
  //     // Breaking the Rules of Hooks?
  //     setData((prevItems) => {
  //       return [{id: uuidv4(), title: text}, ...prevItems];
  //     });
  //   }
  // };

  // const deleteMessage = (id) => {
  //   console.log(id);
  //   setData((prevItems) => {
  //     return [...prevItems.filter((item) => item.id !== id)];
  //   });
  // };

  /*
   * AFTER ADDING REDUX
   */
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.header, styles.one]}>
        <AppHeader
          style={[styles.row, styles.header, styles.one]}
          title={'React Native MQTT'}
          iconUri={'https://reactnative.dev/docs/assets/p_cat1.png'}
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
                onPress={() => deleteMessage(item.id)}
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
  };
};

const mapDispatchToProps = (dispatch /*,, ownProps*/) => {
  // return a object containing functions
  return {
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId)),
    addMessage: (messageItem) => dispatch(addMessage(messageItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MQTTDemo);
//export default MQTTDemo;
