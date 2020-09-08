import {ADD_MESSAGE, DELETE_MESSAGE} from '../actions.types';

export const AddMessage = (messageItem) => ({
  type: ADD_MESSAGE,
  data: messageItem,
});

export const DeleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  data: messageId,
});
