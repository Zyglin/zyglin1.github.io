/* eslint-disable import/no-mutable-exports */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import LoginReduxFormSuccessView from '../views/LoginReduxFormSucces';

class LoginReduxFormSuccessContainer extends React.Component {
  render() {
    return <LoginReduxFormSuccessView mail={this.props.hasEmailValue} password={this.props.hasPasswordValue} />;
  }
}

LoginReduxFormSuccessContainer.propTypes = {
  hasEmailValue: PropTypes.string,
  hasPasswordValue: PropTypes.string,
};

function mapStateToProps(state) {
  const selector = formValueSelector('login');
  const hasEmailValue = selector(state, 'email');
  const hasPasswordValue = selector(state, 'password');
  return {
    hasEmailValue,
    hasPasswordValue,
  };
}

export default connect(mapStateToProps)(LoginReduxFormSuccessContainer);
