import {ADD_MESSAGE, DELETE_MESSAGE} from '../actions/types';
import {v4 as uuidv4} from 'uuid';

const initialState = {
  //messages: [],
  isLoading: false,
  movies: [],
};

// e.g. MovieReducer
const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state, // e.g. keep everything else intack
        // and return new data for your stage items
        movies: state.movies.concat({
          /// .concat() returns new array v.s. .push() adds to the array (e.g. mutating)
          id: uuidv4(),
          title: action.data.title,
        }),
      };
    case DELETE_MESSAGE:
      return {
        ...state, // e.g. keep everything else intack
        // and return new data for your stage items
        movies: state.movies.filter((item) => item.id !== action.data),
      };
    default:
      return state;
  }
};

export default MessageReducer;
