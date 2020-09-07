/* eslint-disable prettier/prettier */
// This is a dumb React components

import React from 'react';
import {Platform, View, Text, Image, StyleSheet, PixelRatio} from 'react-native';

export interface IAppHeaderProps {
  title: string;
  iconUri: string;
}

const AppHeader: React.FC<IAppHeaderProps> = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.row, styles.topRow, styles.spaceBetween]}>
        <Image
          style={[styles.image]}
          source={{uri: props.iconUri}}
        />
        <Text style={[styles.platformText]}>
          OS: {Platform.OS}
        </Text>
      </View>
      <View
        style={[styles.row, styles.bottomRow]}>
        <Text style={[styles.box3, styles.bigText]}>{props.title}</Text>
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  // basics layout style
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },

  topRow:{
    backgroundColor: 'green',
  },
  bottomRow:{
    backgroundColor: 'lightblue',
  },

  spaceEvenly: {
    justifyContent: 'space-evenly',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  //! specific styles
  image: {
    width: PixelRatio.getPixelSizeForLayoutSize(25),
    height: PixelRatio.getPixelSizeForLayoutSize(25),
  },
  platformText: {
    fontFamily: 'Cochin',
    fontSize: 20,
    fontWeight: 'bold',
    color:
      Platform.OS === 'ios'
        ? 'red'
        : Platform.OS === 'android'
        ? 'lightblue'
        : 'blue',
  },
  bigText: {fontSize: PixelRatio.getPixelSizeForLayoutSize(15),fontWeight: 'bold', color: 'crimson' },
});

export default AppHeader;
