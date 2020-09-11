import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  MESSAGES_LOAD_COMPLETE,
  SET_LOADING,
} from './types';

/*
 * Actions are payloads of information that send data from your application to your store. They are the only source of information for the store
 */

export const addMessageAction = (messageItem) => ({
  type: ADD_MESSAGE,
  msgText: messageItem,
});

export const deleteMessageAction = (messageId) => ({
  type: DELETE_MESSAGE,
  msgId: messageId,
});

export const setLoadingAction = (isLoading) => ({
  type: SET_LOADING,
  isLoading: isLoading,
});

export const setLoadingCompleteAction = (messages) => ({
  //return a action `type` and a `loading` state indicating it is getting data.
  type: MESSAGES_LOAD_COMPLETE,
  payload: messages,
});
