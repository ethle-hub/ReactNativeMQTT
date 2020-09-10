import {ADD_MESSAGE, DELETE_MESSAGE, LOAD_MESSAGES} from '../actions/types';

export const addMessageAction = (messageItem) => ({
  type: ADD_MESSAGE,
  msgText: messageItem,
});

export const deleteMessageAction = (messageId) => ({
  type: DELETE_MESSAGE,
  msgId: messageId,
});

export const loadMessagesAction = (messages) => ({
  //return a action type and a loading state indicating it is getting data.
  // available from redux

  type: LOAD_MESSAGES,
  payload: messages,
  loading: false,
});

// => {}
