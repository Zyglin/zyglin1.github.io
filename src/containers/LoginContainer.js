/* eslint-disable class-methods-use-this */
import React from 'react';
import Login from '../views/Login';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  handleLoginShow = event => {
    this.setState({ login: event.target.value });
  };

  handlePasswordShow = event => {
    this.setState({ password: event.target.value });
  };

  handleOnSubmit = event => {
    let loginState = true;
    let passwordState = true;
    console.log();
    if (this.state.login.length < 6) {
      alert('введите в поле Login минимум 6 символов');
      event.preventDefault();
      loginState = false;
    }
    if (this.state.password.length < 6) {
      alert('введите в поле Password минимум 6 символов');
      passwordState = false;
      event.preventDefault();
    }
    if (loginState && passwordState) {
      console.log(JSON.stringify({ login: this.state.login, password: this.state.password }));
      alert(JSON.stringify({ login: this.state.login, password: this.state.password }));
    }
  };

  render() {
    const props = {
      login: this.state.login,
      password: this.state.password,
      handleLoginShow: this.handleLoginShow,
      handlePasswordShow: this.handlePasswordShow,
      handleOnSubmit: this.handleOnSubmit,
    };

    return <Login {...props} />;
  }
}

export default LoginContainer;
