import { PASSWORD_INPUT } from '../actions';

const initialState = '';
function passwordReducer(state = initialState, action) {
  switch (action.type) {
    case PASSWORD_INPUT:
      console.log('Зашёл в PASSWORD_INPUT');
      console.log(action.text);
      return action.text;
    default:
      return state;
  }
}

export default passwordReducer;
