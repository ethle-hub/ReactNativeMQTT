/* eslint-disable no-alert */
import 'react-native-gesture-handler';
import React from 'react';
import {Button, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import appStore from './src/AppStore';

import HomeScreen from './src/containers/HomeScreen'; // default app when project was initialized
import MQTTScreen from './src/components/MQTTDemo'; //'./src/containers/MQTTScreen';
//import MQTTDemo from './src/components/MQTTDemo';

// function LogoTitle() {
//   return (
//     <Image
//       style={{width: 50, height: 50}}
//       source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
//     />
//   );
// }

// function MQTTButton({navigation}) {
//   return (
//     <TouchableOpacity>
//       <Button
//         onPress={() => navigation.navigate('MQTTDemo', {name: 'Jane'})}
//         title="Demo"
//         accessibilityLabel="Go to MQTTDemo screen"
//       />
//     </TouchableOpacity>
//   );
// }

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={appStore()}>
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
    </Provider>
  );
};

export default App;
