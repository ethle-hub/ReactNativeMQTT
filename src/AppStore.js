import {createStore, combineReducers, applyMiddleware} from 'redux';
import messageReducer from './reducers/messageReducer';
import thunk from 'reduc-thunk';

const rootReducer = combineReducers({
  messageReducer: messageReducer,
  //movieRecuder
});

const AppStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default AppStore;
