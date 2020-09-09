/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {Image, Button} from 'react-native';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import appStore from './src/AppStore';

import ReactWelcome from './src/containers/ReactWelcome'; // default app when project was initialized
import MQTTDemo from './src/components/MQTTDemo';
import AppHeader from './src/components/AppHeader';

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
    />
  );
}

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={appStore()}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ReactWelcome}
            options={{
              title: 'React Native Welcome',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="MQTTDemo"
            component={MQTTDemo}
            // options={{title: 'MQTT Demo'},
            options={{
              headerStyle: {
                backgroundColor: 'lightgreen',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#ffc"
                  backgroundColor="000"
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
