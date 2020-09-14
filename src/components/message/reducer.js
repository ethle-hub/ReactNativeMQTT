import {
  LOAD_MESSAGE_START,
  LOAD_MESSAGE_SUCCESS,
  LOAD_MESSAGE_ERROR,
  ADD_MESSAGE,
  DELETE_MESSAGE,
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

const INITIAL_STATE = {
  isLoading: false,
  errorMessage: undefined,
  messages: [],
};

const messageReducer = (state = INITIAL_STATE, action) => {
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
          isLoading: false,
          messages: [{id: uuidv4(), title: action.msgText}, ...state.messages],
        };
      }
    case DELETE_MESSAGE:
      return {
        messages:
          state.messages.filter((item) => item.id !== action.msgId) || [],
        isLoading: false,
      };
    case LOAD_MESSAGE_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_MESSAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        message: action.payload || [],
      };
    case LOAD_MESSAGE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    // case SET_LOADING:
    //   return {
    //     isLoading: action.isLoading,
    //     messages: state.messages || [],
    //   };
    // case SET_DATA:
    //   console.log('showing state.messages');
    //   console.log(state.messages);
    //   return {
    //     ...state,
    //     messages: action.payload || [],
    //     //isLoading: false,
    //   };
    default: {
      return state;
    }
  }
};

export default messageReducer;
