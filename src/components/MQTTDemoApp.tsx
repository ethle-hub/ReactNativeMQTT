// src/components/MQTTDemoApp.tsx

/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  View,
  //Text,
  StyleSheet,
  //ScrollView,
  //SafeAreaView,
  //StatusBar,
} from 'react-native';

import PlatformDisplay from './PlatformDisplay';

// component
const MQTTDemoApp = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <PlatformDisplay />
        </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    </>
  );
};

// styles
const styles = StyleSheet.create({
  container: {flex: 1},
});

export default MQTTDemoApp;
