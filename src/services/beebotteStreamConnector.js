/*
 * Stream Connector - MQTT transport
 */

//Include the Beebotte SDK for nodejs
const bbt = require('beebotte');

const channelName = 'test';
const resourceName = 'vehicle';
const channelToken = 'token_fISEmz2Vadllxt8r'; // need to securely

// OPTIONS
//Replace API and secret keys by those of your account
var transport = {
  type: 'mqtt',
  token: channelToken,
};

// Create a Stream connector
const client = new bbt.Stream({transport: transport});

// option 1) On successful connection
// client.on('connected', function () {
//   console.log('connect...');
//   //subscribe to a channel/resource
//   client
//     .subscribe(channelName, resourceName, function (message) {
//       console.log('client.subscribe..');
//       console.log(message);
//     })
//     //On successful subscription
//     .on('subscribed', function (sub) {
//       console.log('client.publish..');
//       client.publish(channelName, resourceName, 'Hello World');
//     });
// });

// Option 2 - call this connect(...)
// connect(channelName, resourceName, (message) => {
//   console.log('==> messageReceivedCallback');
//   console.log(message);
// });

/**
 * connect - connect this stream. This method is entry point to this service. It will subscribe to channel/resource automatically
 *
 * @public
 *
 * @example connect('channel', 'resource', messageReceivedCallback)
 */
const connect = (channel, resource, messageReceivedCallback) => {
  console.log('==> connect');
  // when called it subscribes to a channel/resource (hardcoded for now)
  client
    .subscribe(channel, resource, (message) => {
      // console.log('==> subscribe');
      // console.log(message);
      messageReceivedCallback(message);
    })
    .on('subscribed', (sub) => {
      console.log('==> subscribed');
      client.publish(channelName, resourceName, 'Hello World');
    });
};

/**
 * disconnect - disconnect this stream.
 *
 * @public
 *
 * @example disconnect()
 */
const disconnect = () => {
  console.log('==> disconnect...');
  client.disconnect();
};

export default {
  connectBeebotte: connect,
  disconnectBeebotte: disconnect,
};
