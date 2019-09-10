import { MAIL_INPUT } from '../actions';

const initialState = '';
function mailReducer(state = initialState, action) {
  switch (action.type) {
    case MAIL_INPUT:
      return action.payload;
    default:
      return state;
  }
}

export default mailReducer;
