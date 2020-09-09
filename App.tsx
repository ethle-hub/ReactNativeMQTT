import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import appStore from './src/AppStore';

import ReactWelcome from './src/containers/ReactWelcome'; // default app when project was initialized
import MQTTDemo from './src/components/MQTTDemo';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={appStore()}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ReactWelcome}
            options={{title: 'React Native Welcome'}}
          />
          <Stack.Screen
            name="MQTTDemo"
            component={MQTTDemo}
            options={{title: 'MQTT Demo'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
