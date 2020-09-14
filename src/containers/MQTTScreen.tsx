// Imports: Dependencies
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, 
  FlatList,
  ActivityIndicator
} from 'react-native';

import { Header, Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {connect} from 'react-redux';

import {
  LOAD_MESSAGE_START,
  LOAD_MESSAGE_SUCCESS,
  LOAD_MESSAGE_ERROR,
  ADD_MESSAGE,
  DELETE_MESSAGE,
} from '../components/message/types';

// Screen: MQTTScreen
const MQTTScreen: () => React$Node = ({messages, isLoading, deleteMessage }) => {

  //const action = type => store.dispatch({type})

  const renderHeader = () => {
    return <>
    <Text style={styles.sectionTitle}>Beebotte</Text>
    <Text style={styles.sectionDescription}>
      .: Receive messages in real time...
    </Text>
  </>
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  const renderFooter = () => {
    if (!isLoading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* Commineted out ScrollView to  avoid error:       
      VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead. */}
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}> */}

        <FlatList
          ListHeaderComponent={renderHeader}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderFooter}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>{item.title}</Text>
                  <Text style={styles.sectionDescription}>
                    {item.releaseYear}
                  </Text>
                  <Icon
                    name="remove"
                    size={20}
                    color="firebrick"
                    //onPress={() => { }}
                    onPress={() => {
                      console.log(item);
                      console.log(`item.id = ${item.id}`);
                      deleteMessage(item.id);
                    }}
                    style={styles.iconView}
                  />
                </View>
              </View>
            )}
          />          
        {/* </ScrollView> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state /*, ownProps?*/) => {
  // return a state object
  return {
    messages: state.messageReducer.messages,
    isLoading: state.messageReducer.isLoading,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch /*, ownProps*/) => {
  return {
    deleteMessage: (msgId: string) => dispatch({
      type: DELETE_MESSAGE,
      payload: msgId,
    }),
    addMessage: (msgText: string) => dispatch({
      type: ADD_MESSAGE,
      payload: msgText,
    }),
    getMessages: () => dispatch({
      type: LOAD_MESSAGE_START      
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MQTTScreen); // injects state and dispatch actions
//export default MQTTScreen;
