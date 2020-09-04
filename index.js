/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';  // default app when project was initialized
//import App from './src/components/MQTTDemoApp';   // our experiment all
import App from './src/components/VectorIconSampleApp'; // 3rd party app
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
