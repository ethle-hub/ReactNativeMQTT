/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
//import App from './App';  // default app when project was initialized
import App from './src/components/MQTTDemo'; // inhere, we use our experiment React component 'MQTTDemo' as the main app

import {Provider} from 'react-redux';
import appStore from './src/AppStore';

const MQTTDemoApp = () => (
  <Provider store={appStore()}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => MQTTDemoApp);
