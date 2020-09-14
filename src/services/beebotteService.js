//Include the Beebotte SDK for nodejs
const bbt = require('beebotte');

const channelName = 'test';
const channelToken = 'token_fISEmz2Vadllxt8r'; // need to securely
const resourceName = 'vehicle';

// OPTIONS
//Replace API and secret keys by those of your account
var transport = {
  type: 'mqtt',
  token: channelToken,
};

//Create a Stream connector
const client = new bbt.Stream({transport: transport});

//On successful connection
client.on('connected', function () {
  //subscribe to a channel/resource
  client.subscribe(channelName, resourceName, function (message) {
    console.log('client.subscribe..');
    console.log(message);
  });
  //On successful subscription
  // .on('subscribed', function (sub) {
  //   console.log('client.publish..');
  //   client.publish(channelName, resourceName, 'Hello World');
  // });
});

// todo 1) add these handlers, 2) export default

// OnSubscriptionStarted => channelName/resourceName
// OnSubscriptionSuccess
// OnSubscriptionError
// OnConnectionStarted => transport => type + channelToken
// OnConnectionSuccess
// OnConnectionError
// OnClientClosed

export default client; 
