import { MAIL_INPUT } from '../actions';

const initialState = '';
function mailReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case MAIL_INPUT:
      console.log('MAILINPUT ЗАШЁЛ');
      console.log(action.text);
      return action.text;
    default:
      console.log('STATE');
      return state;
  }
}

export default mailReducer;
