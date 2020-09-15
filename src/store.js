// Imports: Dependencies
import {createStore, combineReducers, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {logger} from 'redux-logger';

// see https://www.npmjs.com/package/redux-persist
import {persistStore, persistReducer} from 'redux-persist';
// Imports: Redux actions to update the state
import messageReducer from './components/message/reducer';

// Imports: thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk'; // in used with components/message/MQTTDemo.tsx

// Middleware: Redux Saga (instead of redux-thunk)
// check out the root Saga at https://levelup.gitconnected.com/react-native-redux-implementing-redux-saga-for-an-asynchronous-flow-90a0e9d7d8e8
import createSagaMiddleware from 'redux-saga';

// specific saga for message
import watchLoadMessagesSaga from './components/message/sagas';

// RootReducer: TODO - move it into seperate file /when/if required
const rootReducer = combineReducers({
  messageReducer: messageReducer,
  //movieRecuder
});

// Middleware: Redux Persist Config for AsyncStorage
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['messageReducer'],
  // Blacklist (Don't Save Specific Reducers)
  //blacklist: ['movieRecuder'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
// introducing 3 middlewares: logger, thunk, saga
const middlewares = [thunk, sagaMiddleware]; // e.g. logger ~= createLogger()

// Redux: `store` is created using a root reducer function (or persistedReducer in this case)
let store = createStore(persistedReducer, applyMiddleware(...middlewares));

// Middleware: Redux Saga
//sagaMiddleware.run(watchLoadMessagesSaga); // inject

//const action = (type) => store.dispatch({type});

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export {store, persistor};
