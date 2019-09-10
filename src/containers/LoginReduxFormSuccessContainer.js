/* eslint-disable import/no-mutable-exports */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import LoginReduxFormSuccessView from '../views/LoginReduxFormSucces';

class LoginReduxFormSuccessContainer extends React.Component {
  render() {
    return <LoginReduxFormSuccessView mail={this.props.hasEmailValue} password={this.props.passwordValue} />;
  }
}

LoginReduxFormSuccessContainer.propTypes = {
  hasEmailValue: PropTypes.string,
  passwordValue: PropTypes.string,
};

function mapStateToProps(state) {
  const selector = formValueSelector('login');
  const emailValue = selector(state, 'email');
  const passwordValue = selector(state, 'password');
  return {
    emailValue,
    passwordValue,
  };
}

export default connect(mapStateToProps)(LoginReduxFormSuccessContainer);
