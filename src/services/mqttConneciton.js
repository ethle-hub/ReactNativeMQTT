import init from 'react_native_mqtt';
import {AsyncStorage} from 'react-native';

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  reconnect: true,
  sync: {},
});

// beebotte's Authentication
const beebotteAuthentication = {
  channelName: 'test',
  resourceName: 'vehicle',
  channelToken: 'token_fISEmz2Vadllxt8r', // should use Identity and Access Management (IAM) tokens instead
  mqttHost: 'mqtt.beebotte.com',
  ssl: true,
  port: 8883,
  type: 'mqtt',
  apiKey: 'WDB9PMCbQtbDEnqhWRu5hvk3', // see https://beebotte.com/docs/auth
};

// e.g. ConnectionOptions for beebotte
const connectionOptions = {
  reconnect: false,
  cleanSession: true;
  mqttVersion: 3,
  keepAliveInterval: 60,
  timeout: 60;  
};

export default class MQTTConnection {
  
}


function onConnect() {
  console.log('onConnect');
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log('onConnectionLost:' + responseObject.errorMessage);
  }
}

function onMessageArrived(message) {
  console.log('onMessageArrived:' + message.payloadString);
}

const client = new Paho.MQTT.Client('iot.eclipse.org', 443, 'uname');
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;
client.connect({onSuccess: onConnect, useSSL: true});
