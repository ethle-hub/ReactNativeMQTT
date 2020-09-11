import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  SET_LOADING,
  MESSAGES_LOAD_COMPLETE,
} from './types';
import {v4 as uuidv4} from 'uuid';
import {Alert} from 'react-native';

/*
 * Actions describe the fact that something happened, but don’t specify how the application’s state changes in response. This is the job of reducers.
 */

/*
 * The store runs the reducer function (e.g. messageReducer) again with the previous state and the current action, and saves the return value as the new state
 * Then the store notifies all parts of the UI that are subscribed that the store has been updated
 */

const initialState = {
  //isLoading: false,
  messages: [],
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
        console.log(state);
        return {
          ...state,
          messages: [{id: uuidv4(), title: action.msgText}, ...state.messages],
        };
      }
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((item) => item.id !== action.msgId),
      };
    case SET_LOADING:
      if (state.messages === undefined || state.messages.length === 0) {
        console.log(`SET_LOADING => ${action.isLoading}`);
        return {
          isLoading: action.isLoading,
          messages: [],
        };
      } else {
        console.log(`SET_LOADING => ${action.isLoading}`);
        return {
          ...state,
          isLoading: action.isLoading,
          messages: state.messages || [],
        };
      }
    case MESSAGES_LOAD_COMPLETE:
      console.log(state);
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };
    default: {
      return state;
    }
  }
};

export default messageReducer;
