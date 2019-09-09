/* eslint-disable class-methods-use-this */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from './views/LoginRedux/reducers';
import AppRouter from './AppRouter';

const rootReducer = combineReducers({
  loginredux: reducer,
  form: formReducer,
});

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
