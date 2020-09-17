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

import socketIO from 'socket.io-client';

// Initialize Socket IO
// client-connection-lifecycle: https://socket.io/docs/client-connection-lifecycle/
// Additional options: https://socket.io/docs/client-initialization/
// this 'socketIO is equevalent to node_modules/beebotte/lib/socketio.js
const socket = socketIO(
  'https://ws.beebotte.com', // https://ws.localhost/myownpath/?EIO=3&transport=polling&sid=<id>
  {
    // default configuration
    //path: '/socket.io',
    reconnection: true,
    // reconnectionAttempts: Infinity,
    // reconnectionDelay: 1000,
    // reconnectionDelayMax: 5000,
    // randomizationFactor: 0.5,
    // timeout: 20000,
    // autoConnect: true,
    query: {
      token: 'token_fISEmz2Vadllxt8r',
    },
    transports: ['websocket'],
  },
);

const HomeScreen: () => React$Node = ({navigation}) => {
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('test.vehicle', {some: 'data'});
      console.log('connect with ctoken');

      // sending to the client
      //if (
      socket.send('control', 'subscribe', {
        channel: 'test',
        resource: 'vehicle',
      });
      // ) {
      console.log('control => subscribe');
      //} else {
      socket.emit('subscribeError', {
        error: 'Unexpected error encountered while unsubscribing',
        channel: 'test',
        resource: 'vehicle',
      });
      console.log('control => subscribeError');
      //}
    });

    // handle the event sent with socket.send()
    socket.on('getsid', (sid) => {
      console.log(`sid: ${sid}`);
    });

    // handle the event sent with socket.emit()
    socket.on('control', (msg) => {
      console.log('control');
      console.log(msg);
    });
    socket.on('subscribe', (msg) => {
      console.log('subscribe');
      console.log(msg);
    });
    socket.on('subscribeError', (msg) => {
      console.log('subscribeError');
      console.log(msg);
    });

    // switch (msg.event) {
    // case 'subscribed':
    //   var subscription = self.bbt.getSubscription(
    //     msg.data.channel,
    //     msg.data.resource
    //   )

    //   if (subscription) {
    //     subscription.subscribe()
    //     self.bbt.emit('subscribed', subscription)
    //   }
    //   break

    // case 'subscribeError':
    //   var subscription = self.bbt.getSubscription(
    //     msg.data.channel,
    //     msg.data.resource
    //   )

    //   if (subscription) {
    //     subscription.unsetSubscribeTimer()
    //     self.bbt.emit('subscribeError', msg.message, subscription)
    //   }
    //   break

    // case 'unsubscribed':
    //   var subscription = self.bbt.getSubscription(
    //     msg.data.channel,
    //     msg.data.resource
    //   )

    //   if (subscription) {
    //     subscription.unsubscribe()
    //     self.bbt.emit('unsubscribed', subscription)
    //     self.bbt.removeSubscription(
    //       subscription.channel,
    //       subscription.resource
    //     )
    //     subscription = null
    //   }
    //   break

    // case 'unsubscribeError':
    //   var subscription = self.bbt.getSubscription(
    //     msg.data.channel,
    //     msg.data.resource
    //   )

    //   if (subscription) {
    //     subscription.unsetUnsubscribeTimer()
    //     self.bbt.emit('unsubscribeError', msg.message, subscription)
    //   }
    //   break

    // default:
    //   break
    //}

    //  connect_error 	Fired upon a connection error
    socket.on('connect_error', (error) => {
      console.log(`connect_error => ${error}`);

      setTimeout(() => {
        socket.connect();
      }, 2000);
    });

    //socket.on('reconnect_attempt', () => {
    //   // on reconnection, reset the transports option, as the Websocket
    //   // connection may have failed (caused by proxy, firewall, browser, ...)
    //   console.log('reconnect_attempt');
    //   console.log(socket.io.opts.transports);
    //   //socket.io.opts.transports = ['polling', 'websocket'];
    // });

    // socket.on('reconnecting', (attemptNumber) => {
    //   console.log(`reconnecting => ${attemptNumber}`);
    // });

    // .on('ping', () => {
    //   // Fired when a ping packet is written out to the server.
    //   console.log('ping');
    // })

    socket.on('pong', (ms) => {
      // Fired when a pong is received from the server.
      console.log(`${ms}ms elapsed since ping packet`);
    });

    // socket.on('disconnect', () => {
    //   console.log('disconnect');
    //   setTimeout(() => {
    //     socket.connect();
    //   }, 500);
    // });

    socket.connect();

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
              {/* <Button
                title="redux-thunk"
                onPress={() => navigation.navigate('SagaScreen', {})}
              />
              <Button
                title="redux-saga"
                onPress={() => navigation.navigate('ThunkScreen', {})}
              /> */}
              <Button
                title="Send message"
                onPress={() => {
                  socket.send('Hello!');
                  console.log('sent');
                }}
              />
              <Button
                title="Emit event"
                onPress={() => {
                  // socket.io.emit(
                  //   'test/vehicle',
                  //   'Hello!',
                  //   {mr: 'john'},
                  //   Uint8Array.from([1, 2, 3, 4]),
                  // );

                  socket.emit('presence-test.vehicle', {some: 'data'});
                  console.log('emitted');
                }}
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
