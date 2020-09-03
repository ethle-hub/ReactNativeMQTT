import React from 'react';
import {Platform, Text, StyleSheet} from 'react-native';

const PlatformDisplay = () => {
  return <Text styles={styles.container}>{Platform.OS}</Text>;
};

// styles
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
});

export default PlatformDisplay;
