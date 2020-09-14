import {
  LOAD_MESSAGE_START,
  LOAD_MESSAGE_SUCCESS,
  LOAD_MESSAGE_ERROR,
  ADD_MESSAGE,
  DELETE_MESSAGE,
} from './types';

/*
 * In redux-thunk perspective. These are action creator
 * Actions are payloads of information that send data from your application to your store. They are the only source of information for the store
 */

export const onMessageAdded = (messageItem) => ({
  type: ADD_MESSAGE,
  payload: messageItem,
});

export const onMessageDeleted = (messageId) => ({
  type: DELETE_MESSAGE,
  payload: messageId,
});

export const loadMessagesStarted = () => ({
  type: LOAD_MESSAGE_START,
});

export const loadMessagesSuccess = (messages) => ({
  type: LOAD_MESSAGE_SUCCESS,
  payload: messages,
});

export const loadMessagesError = (errorMessage) => ({
  type: LOAD_MESSAGE_ERROR,
  payload: errorMessage,
});

/*
 * This is a funciton that return another function that las a paramater `dispatch`
 * Once dispatch gets called, the control flow will move to the reducer to decide what to do.
 * ref: https://medium.com/javascript-in-plain-english/redux-thunk-vs-redux-saga-8c93fc822de
 *
 * In this case, it only updates the application state, if the request has been successful.
 *
 * Notes (1): (with Redux-thunk) this action does not return a plain object, it can cause
 * Error "Actions must be plain objects. Use custom middleware for async actions."
 * when use with useEffect()
 *
 * e.g.
 * import {createStore, applyMiddleware} from 'redux';
 * import rootReducer from '../reducers/rootReducer';
 * import thunk from 'redux-thunk';
 *
 * export default function configureStore() {
 *  return createStore(
 *    rootReducer,
 *    applyMiddleware(thunk)
 *  );
 * }
 *
 */
export const loadMessages = () => async (dispatch) => {
  dispatch(loadMessagesStarted());
  try {
    const taskResponse = await fetch('https://reactnative.dev/movies.json');
    const json = await taskResponse.json();
    dispatch(loadMessagesSuccess(json.movies));
  } catch (error) {
    dispatch(loadMessagesError(error.message));
  }
  // finally {
  //   return () => {
  //     console.log('useEffect() clean up');
  //   };
  // }
};
