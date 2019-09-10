import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import LoginReduxFormView from '../views/LoginReduxForm';

class LoginReduxFormContainer extends React.Component {
  handleSubmit = values => {
    console.log(this.props.emailValue);
    console.log(this.props.passwordValue);
    this.props.history.push('login-redux-form/success');
    console.log(values);
  };

  render() {
    return (
      <div>
        <LoginReduxFormView onSubmit={this.handleSubmit} mail={this.props.emailValue} password={this.props.passwordValue} />
      </div>
    );
  }
}

LoginReduxFormContainer.propTypes = {
  history: PropTypes.any,
  emailValue: PropTypes.string,
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

export default connect(mapStateToProps)(LoginReduxFormContainer);
