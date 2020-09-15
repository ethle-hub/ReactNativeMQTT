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

import * as Mqtt from 'react-native-native-mqtt';

// beebotte's Authentication
const beebotteAuthentication = {
  channelName: 'test',
  resourceName: 'vehicle',
  channelToken: 'token_fISEmz2Vadllxt8r', // should use Identity and Access Management (IAM) tokens instead
  mqttHost: 'mqtt.beebotte.com',
  ssl: true,
  port: 8883,
  type: 'mqtt',
  apiKey: 'WDB9PMCbQtbDEnqhWRu5hvk3', // see https://beebotte.com/docs/auth
};

// e.g. ConnectionOptions for beebotte
const connectionOptions = {
  clientId: 'CAR-M001', //beebotteAuthentication.apiKey, // 'CLIENT_ID',
  //cleanSession?: boolean;
  //keepAlive?: number;
  //timeout?: number;
  //maxInFlightMessages?: number;
  //autoReconnect?: boolean;
  //username?: string; // from Beebotte's account
  //password?: '', // from Beebotte's account
  tls: beebotteAuthentication.channelToken, // e.g. caDer?: Buffer; cert?: string; key?: string; p12?: Buffer; pass?: string;
  allowUntrustedCA: true,
  enableSsl: beebotteAuthentication.ssl,
};

const client = new Mqtt.Client(
  `${beebotteAuthentication.mqttHost}:${beebotteAuthentication.port}`, // e.g. '[SCHEME]://[URL]:[PORT]'
);

const HomeScreen: () => React$Node = ({navigation}) => {
  useEffect(() => {
    client.connect(
      // options
      connectionOptions,
      // callback
      (err) => {
        if (err) {
          console.log(`Mqtt error: ${err}`);
        } else {
          console.log('Mqtt connected');
        }
      },
    );

    client.on(Mqtt.Event.Message, (topic: string, message: Buffer) => {
      console.log('Mqtt Message:', topic, message.toString());
    });

    client.on(Mqtt.Event.Connect, () => {
      console.log('MQTT Connect');
      // subscribe(topics, qos)
      const singleTopic = `${beebotteAuthentication.channelName}.${beebotteAuthentication.resourceName}`;
      client.subscribe([singleTopic], [0]);
    });

    client.on(Mqtt.Event.Error, (error: string) => {
      console.log('MQTT Error:', error);
    });

    client.on(Mqtt.Event.Disconnect, (cause: string) => {
      console.log('MQTT Disconnect:', cause);
    });

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
