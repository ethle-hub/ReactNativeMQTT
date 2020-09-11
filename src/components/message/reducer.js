import {ADD_MESSAGE, DELETE_MESSAGE, LOAD_MESSAGES} from './types';
import {v4 as uuidv4} from 'uuid';
import {Alert} from 'react-native';

/*
 * The store runs the reducer function (e.g. messageReducer) again with the previous state and the current action, and saves the return value as the new state 
 * Then the store notifies all parts of the UI that are subscribed that the store has been updated
 */

const initialState = {
  // messages: [
  //   {id: '1', title: 'Star Wars', releaseYear: '1977'},
  //   {id: '2', title: 'Back to the Future', releaseYear: '1985'},
  //   {id: '3', title: 'The Matrix', releaseYear: '1999'},
  //   {id: '4', title: 'Inception', releaseYear: '2010'},
  //   {id: '5', title: 'Interstellar', releaseYear: '2014'},
  // ],
};

const messageReducer = (state = initialState, action) => {
  console.log(`action.type => ${action.type}`);
  //console.log(state.messages);
  switch (action.type) {
    case ADD_MESSAGE:
      console.log(`ADD_MESSAGE => ${action.msgText}`);
      if (!action.msgText) {
        // todo: move this Alert into UI component
        Alert.alert(
          'No item entered',
          'Please enter an message text',
          [
            {
              text: 'ok',
              style: 'cancel',
            },
          ],
          {cancelable: true},
        );
        return state;
      } else {
        return {
          messages: [{id: uuidv4(), title: action.msgText}, ...state.messages],
        };
      }
    case DELETE_MESSAGE:
      console.log(`DELETE_MESSAGE => ${action.msgId}`);
      console.log(action);
      return {
        messages: state.messages.filter((item) => item.id !== action.msgId),
      };
    case LOAD_MESSAGES:
      return {
        messages: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default messageReducer;
