import { PASSWORD_INPUT } from '../actions';

const initialState = '';
function passwordReducer(state = initialState, action) {
  switch (action.type) {
    case PASSWORD_INPUT:
      return action.text;
    default:
      return state;
  }
}

export default passwordReducer;
