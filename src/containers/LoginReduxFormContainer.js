/* eslint-disable import/no-mutable-exports */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import LoginReduxFormView from '../views/LoginReduxForm';

class LoginReduxFormContainer extends React.Component {
  handleSubmit = values => {
    this.props.history.push('login-redux-form/success');
    console.log(values);
  };

  render() {
    return (
      <div>
        <LoginReduxFormView onSubmit={this.handleSubmit} mail={this.props.hasEmailValue} password={this.props.hasPasswordValue} />
      </div>
    );
  }
}

LoginReduxFormContainer.propTypes = {
  history: PropTypes.any,
  hasEmailValue: PropTypes.any,
  hasPasswordValue: PropTypes.any,
};

let LoginReduxForm = LoginReduxFormContainer;

const selector = formValueSelector('login');
LoginReduxForm = connect(state => {
  const hasEmailValue = selector(state, 'email');
  const hasPasswordValue = selector(state, 'password');
  return {
    hasEmailValue,
    hasPasswordValue,
  };
})(LoginReduxForm);

export default LoginReduxForm;
