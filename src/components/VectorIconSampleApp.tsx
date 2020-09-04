/* eslint-disable react-native/no-inline-styles */
/*Example of React Native Vector Icon*/
import React, {Component} from 'react';
//import React
import {StyleSheet, Text, View} from 'react-native';
//import all the basic components

import Icon from 'react-native-vector-icons/FontAwesome';
//import vector icons

type Props = {};
export default class App extends Component<Props> {
  render() {
    Icon.getImageSource('user', 20, 'red').then((source) =>
      this.setState({userIcon: source}),
    );
    return (
      <View style={styles.container}>
        <Text>Example of Vector Icon</Text>
        <View
          style={{
            marginTop: 16,
            marginBottom: 16,
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          {/*Icon Component*/}
          <Icon name="rocket" size={30} color="#900" />
        </View>
        <View style={{marginTop: 16, marginBottom: 16}}>
          {/*Icon.Button Component*/}
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            // eslint-disable-next-line no-alert
            onPress={() => alert('Login with Facebook')}>
            Login with Facebook
          </Icon.Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
