// Imports: Dependencies
import {createStore, combineReducers, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';

// Imports: thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';

// see https://www.npmjs.com/package/redux-persist
import {persistStore, persistReducer} from 'redux-persist';

// Imports: Redux actions to update the state
import messageReducer from './components/message/reducer';

const rootReducer = combineReducers({
  messageReducer: messageReducer,
  //movieRecuder
});

// Middleware: Redux Persist Config
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

// Redux: `store` is created using a root reducer function (or persistedReducer in this case)
let store = createStore(persistedReducer, applyMiddleware(thunk)); // applyMiddleware(createLogger()));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export {store, persistor};
