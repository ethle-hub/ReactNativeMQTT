/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import io from 'socket.io-client';

// Initialize the socket manager for given URL
const socket = io('https://ws.beebotte.com', {
  // localhost/myownpath/?EIO=3&transport=polling&sid=<id>
  path: 'socket.io', // namespace
  autoConnect: false,
  transports: ['websocket'],
  query: {
    token: 'token_fISEmz2Vadllxt8r',
  },
  //timeout: 85000,
});

const HomeScreen: () => React$Node = ({navigation}) => {
  useEffect(() => {
    console.log('before socket connect');

    socket
      .on('connect_error', (error) => {
        console.log('connect_error');
        console.log(error);
      })
      .on('connect', () => {
        console.log('connect with ctoken');

        // const chat = io.of('/chat');
        // chat.emit('an event sent to all connected clients in chat namespace');
      })
      // .on('reconnect_attempt', () => {
      //   // on reconnection, reset the transports option, as the Websocket
      //   // connection may have failed (caused by proxy, firewall, browser, ...)
      //   console.log('reconnect_attempt');
      //   //console.log(socket.io.opts.transports);
      //   //socket.io.opts.transports = ['polling', 'websocket'];
      // })
      // .on('reconnecting', (attemptNumber) => {
      //   console.log(`reconnecting: ${attemptNumber}`);
      // })
      // .on('ping', () => {
      //   // Fired when a ping packet is written out to the server.
      //   console.log('ping');
      // })
      .on('pong', (ms) => {
        // Fired when a pong is received from the server.
        console.log(`${ms}ms elapsed since ping packet`);
      })
      .on('disconnect', () => {
        console.log('disconnect');
        //socket.open();
      })
      // .on('subscribed', (data) => {
      //   console.log('event: subscribed');
      //   console.log(data);
      // })
      // .on('unsubscribed', (data) => {
      //   console.log('event: unsubscribed');
      //   console.log(data);
      // })
      .on('message', (data) => {
        console.log('event: message');
        console.log(data);
      });

    socket.open();

    return () => {
      console.log('useEffect() clean up');
    };
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.row}>
              <Button
                title="redux-thunk"
                onPress={() => navigation.navigate('SagaScreen', {})}
              />
              <Button
                title="redux-saga"
                onPress={() => navigation.navigate('ThunkScreen', {})}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
