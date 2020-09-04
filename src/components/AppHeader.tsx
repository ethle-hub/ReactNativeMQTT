/* eslint-disable prettier/prettier */
// This is a dumb React components

import React from 'react';
import {Platform, View, Text, Image, StyleSheet} from 'react-native';

const AppHeader = () => {
  // re: image source

  // (option 1)
  //   const icon = {
  //     uri:
  //       'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
  //   };

  // (option 2)
  //const icon = {uri: 'https://reactnative.dev/docs/assets/p_cat2.png'};

  // or (option 3)
  const icon = {
    uri: 'https://image.winudf.com/v2/image/YnIuY29tLmJpbnRlY2hub2xvZ3kubXF0dGNsaWVudF9pY29uX3M1Z2J5eTA0/icon.png?w=170&fakeurl=1',
    method: 'POST',
    headers: {
      Pragma: 'no-cache',
    },
    body: 'Your Body goes here',
  };

  return (
    <>
      {/* top row */}
      <View style={[styles.row]}>
        {/* left: app-logo*/}
        <Image style={[styles.column, styles.left, styles.image]}source={icon} />
        {/* right: help-icon*/}
        <Text style={[styles.column, styles.right, styles.platformText]}>{'hello'}</Text>
      </View>

      {/* bottom row */}
      <View style={[styles.row, styles.left]}>
        <Text style={styles.bigText}>{'My App'}</Text>
      </View>
    </>
  );
};

// styles
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  column: {
    flexDirection: 'column',
    //alignItems: 'flex-end',  // e.g. align horizontally enum('flex-start', 'flex-end', 'center', 'stretch', 'baseline')
    alignContent: 'space-between', // enum('flex-start', 'flex-end', 'center', 'stretch', 'space-between', 'space-around')
    minWidth: 60,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly')
    minHeight: 50,
  },
  left: {alignSelf: 'flex-start', backgroundColor: 'aquamarine'},
  right: {alignSelf: 'flex-end', backgroundColor: 'skyblue'},
  center: {
    justifyContent: 'center', // enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly')
    backgroundColor: 'yellow',
  },
  platformText: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
    color:
      Platform.OS === 'ios'
        ? 'red'
        : Platform.OS === 'android'
        ? 'green'
        : 'blue',
  },
  bigText: {fontSize: 40,fontWeight: 'bold', color: 'crimson' },
  image: {
    width: 50,
    height: 50,
  },
});

export default AppHeader;
