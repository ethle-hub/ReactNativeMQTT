import {ADD_MESSAGE, DELETE_MESSAGE} from '../actions/types';
import {v4 as uuidv4} from 'uuid';

const initialState = {
  messages: [
    {id: '1', title: 'Star Wars', releaseYear: '1977'},
    {id: '2', title: 'Back to the Future', releaseYear: '1985'},
    {id: '3', title: 'The Matrix', releaseYear: '1999'},
    {id: '4', title: 'Inception', releaseYear: '2010'},
    {id: '5', title: 'Interstellar', releaseYear: '2014'},
  ],
};

// e.g. MovieReducer
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      console.log(action.data);
      // Alert.alert(
      //     'No item entered',
      //     'Please enter an movie title to your list',
      //     [
      //       {
      //         text: 'ok',
      //         style: 'cancel',
      //       },
      //     ],
      //     {cancelable: true},
      //   );

      return {
        ...state, // e.g. keep everything else intack
        // and return new data for your stage items
        messages: state.messages.concat({
          /// .concat() returns new array v.s. .push() adds to the array (e.g. mutating)
          id: uuidv4(),
          title: action.data,
        }),
      };
    case DELETE_MESSAGE:
      return {
        ...state, // e.g. keep everything else intack
        // and return new data for your stage items
        messages: state.messages.filter((item) => item.id !== action.id),
      };
    default: {
      console.log('messageReducer.default');
      return state;
    }
  }
};

export default messageReducer;
