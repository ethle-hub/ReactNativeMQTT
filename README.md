# MQTTDemoApp

MQTTDemoApp is a React Native (RN) application to demonstrate pub/sub to MQTT brokers

## Installation

Assuming that you have node installed, you can use npm to install the react-native-cli command line utility. Follow the [React Native CLI Quickstart](https://reactnative.dev/docs/0.59/getting-started).

```
npm install -g react-native-cli
```

Run the following commands to create a new React Native project

```
react-native init AwesomeProject
```

If you want to start a new project with a specific React Native version, you can use the `--version` argument (optional):

```
cd AwesomeProject
react-native run-android --version X.XX.X
```
## Dependencies

[react-native-vector-icons](https://oblador.github.io/react-native-vector-icons/)

```
npm install react-native-vector-icons --save
```

## Usage

## Troubleshooting

+ WHen you see error about Metro bundler, clear the cache as below in seperate command line terminal

````
react-native start --reset-cache
````


+ Fixed npm package versions

By default npm installs packages using `^` which means any version in the same major range, you can switch this behaviour by using `--save-exact`

```
// npm
npm install --save --save-exact react

// yarn
yarn add --exact react

```


+ error: Error: Unable to resolve module ....

If you are sure the module exists, try these steps:

 1. Clear watchman watches: `watchman watch-del-all`
 2. Delete node_modules: `rm -rf node_modules and run yarn install`
 3. Reset Metro's cache: `yarn start --reset-cache` or `npm start --reset-cache` or `react-native start --reset-cache`
 4. Remove the cache: `rm -rf /tmp/metro-*`

