
import { takeLatest, put } from "redux-saga/effects";

// copy all mehtods from /action.js 
// IGNORE the last function loadMessages() replaced by loadMessagesSaga

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
  
  export const loadMessagesError= (errorMessage) => ({
    type: LOAD_MESSAGE_ERROR,
    payload: errorMessage,
  });



/*
 * This is equivalent to loadMessages() from /action.js 
 * instead of dispatch(myFunction())
 * use 'yeild put(myFunction())'
 */
function* loadMessagesSaga() {
    yield put(loadMessagesStarted());
    try {
        const taskResponse = yield fetch('https://reactnative.dev/movies.json');
        const json = yield taskResponse.json();
        yield put(loadMessagesSuccess(json.movies));
    } catch (error) {
        yield put(loadMessagesError(error.message));
    }
}

// Use this in store.js
// e.g. sagaMiddleware.run(watchFetchTasksSaga);
export default function* watchLoadMessagesSaga(){
    yield takeLatest(LOAD_MESSAGE_START, loadMessagesSaga);
    // or?
    //yield* takeLatest(LOAD_MESSAGE_START, loadMessagesSaga)
}
