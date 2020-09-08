import {createStore, combineReducers} from 'redux';
import messageReducer from './reducers/messageReducer';

const rootReducer = combineReducers({
  messageReducer: messageReducer,
  //movieRecuder
});

const AppStore = () => createStore(rootReducer);

export default AppStore;
