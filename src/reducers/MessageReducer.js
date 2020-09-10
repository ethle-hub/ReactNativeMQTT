import {ADD_MESSAGE, DELETE_MESSAGE, LOAD_MESSAGES} from '../actions/types';
import {v4 as uuidv4} from 'uuid';
import {Alert} from 'react-native';

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
  //console.log(`messageReducer => ${action.type}`);
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
