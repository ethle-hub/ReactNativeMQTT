import {ADD_MESSAGE, DELETE_MESSAGE} from '../actions/types';

export const addMessage = (messageItem) => ({
  type: ADD_MESSAGE,
  text: messageItem,
});

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  id: messageId,
});
