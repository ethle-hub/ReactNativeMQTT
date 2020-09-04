/* eslint-disable react/jsx-no-undef */
// src/components/MQTTDemoApp.tsx

/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  //ScrollView,
  //SafeAreaView,
  //StatusBar,
} from 'react-native';

import AppHeader from './AppHeader';

// component
const MQTTDemoApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppHeader />
      </View>
      <View style={[styles.main, styles.threeQuarterHeight]}>
        <Text>{'MAIN'}</Text>
      </View>
      <View style={[styles.footer, styles.quarterHeight]}>
        <Text>{'FOOTER'}</Text>
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    // margin: 5,
  },
  header: {
    backgroundColor: 'powderblue',
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
  threeQuarterHeight: {
    flex: 3,
  },
  halfHeight: {
    flex: 2,
  },
  quarterHeight: {
    flex: 1,
  },
});

export default MQTTDemoApp;
