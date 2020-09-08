import {ADD_MESSAGE, DELETE_MESSAGE} from '../actions/types';

export const addMessageAction = (messageItem) => ({
  type: ADD_MESSAGE,
  msgText: messageItem,
});

export const deleteMessageAction = (messageId) => ({
  type: DELETE_MESSAGE,
  msgId: messageId,
});
