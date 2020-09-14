/* eslint-disable no-alert */
// Imports: Dependencies
import 'react-native-gesture-handler';
import React from 'react';
import {Button, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import {PersistGate} from 'redux-persist/integration/react';

// Imports: Redux Persist Persister
import {store, persistor} from './src/store';

// Imports: Screens
import HomeScreen from './src/containers/HomeScreen'; // default app when project was initialized
//import MQTTScreen from './src/components/message/MQTTDemo'; 
import MQTTScreen from './src/containers/MQTTScreen';

const Stack = createStackNavigator();

//const {store: appStore} = store;

// React Native: App
const App: () => React$Node = () => {
  /*
   * When the UI is first rendered, UI components access the current state of the Redux `store` e.g. import {store, persistor} from './src/store' ,
   * and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
   */

  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={({navigation}) => ({
                title: 'React Native Welcome',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('MQTTDemo');
                    }}>
                    <Icon name="menu" size={26} backgroundColor="#3b5998" />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="MQTTDemo"
              component={MQTTScreen}
              options={{
                // headerStyle: {
                //   backgroundColor: '#f4511e',
                // },
                // headerTintColor: '#fff',
                // headerTitleStyle: {
                //   fontWeight: 'bold',
                // },
                title: 'MQTT Demo',
                // headerTitle: (props) => <LogoTitle {...props} />,
                headerRight: () => (
                  // <Button
                  //   onPress={() => alert('This is a button!')}
                  //   title="Config"
                  //   color="#f4511e"
                  // />
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                  />
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
