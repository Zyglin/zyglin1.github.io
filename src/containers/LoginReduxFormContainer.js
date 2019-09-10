import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import LoginReduxFormView from '../views/LoginReduxForm';

class LoginReduxFormContainer extends React.Component {
  handleSubmit = values => {
    console.log(this.props.hasEmailValue);
    console.log(this.props.hasPasswordValue);
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

export default connect(mapStateToProps)(LoginReduxFormContainer);
