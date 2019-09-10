/* eslint-disable import/no-mutable-exports */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import LoginReduxFormSuccessView from '../views/LoginReduxFormSucces';

class LoginReduxFormSuccessContainer extends React.Component {
  render() {
    console.log(this.props.hasEmailValue);
    console.log(this.props.hasPasswordValue);
    return <LoginReduxFormSuccessView mail={this.props.hasEmailValue} password={this.props.hasPasswordValue} />;
  }
}

LoginReduxFormSuccessContainer.propTypes = {
  hasEmailValue: PropTypes.any,
  hasPasswordValue: PropTypes.any,
};

let LoginReduxFormSuccess = LoginReduxFormSuccessContainer;
const selector = formValueSelector('login');
LoginReduxFormSuccess = connect(state => {
  const hasEmailValue = selector(state, 'email');
  const hasPasswordValue = selector(state, 'password');
  return {
    hasEmailValue,
    hasPasswordValue,
  };
})(LoginReduxFormSuccess);

export default LoginReduxFormSuccess;
