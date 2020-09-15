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

// import {
//   connectBeebotte,
//   disconnectBeebotte,
// } from '../services/beebotteStreamConnector';

/*
 * Stream Connector - MQTT transport
 */

// const channelName = 'test';
// const resourceName = 'vehicle';
// const channelToken = 'token_fISEmz2Vadllxt8r'; // need to securely

// // OPTIONS
// //Replace API and secret keys by those of your account
// var transport = {
//   type: 'mqtt',
//   token: channelToken,
// };

// // Create a Stream connector
// const client = new bbt.Stream({transport: transport});

const HomeScreen: () => React$Node = ({navigation}) => {
  useEffect(() => {
    // connectBeebotte('test', 'vehicle', (message) => {
    //   console.log(`I received: ${message}`);
    // });

    // client.on('connected', function () {
    //   console.log('connect...');
    //   //subscribe to a channel/resource
    //   client
    //     .subscribe(channelName, resourceName, function (message) {
    //       console.log('client.subscribe..');
    //       console.log(message);
    //     })
    //     //On successful subscription
    //     .on('subscribed', function (sub) {
    //       console.log('client.publish..');
    //       client.publish(channelName, resourceName, 'Hello World');
    //     });
    // });

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
