/* eslint-disable class-methods-use-this */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './views/LoginRedux/reducers/index';
import AppRouter from './AppRouter';

const store = createStore(reducer);

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
