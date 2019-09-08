import { combineReducers } from 'redux';
import mail from './mailReducer';
import password from './passwordReducer';

const rootReducer = combineReducers({
  mail,
  password,
});

export default rootReducer;
