/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import LoginReduxFormView from '../views/LoginReduxForm';

class LoginReduxFormContainer extends React.Component {
  handleSubmit = values => {
    this.props.history.push('login-redux-form/success');
    console.log(values);
  };

  render() {
    return (
      <div>
        <LoginReduxFormView onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

LoginReduxFormContainer.propTypes = {
  history: PropTypes.any,
};

// function mapStateToProps(state) {
//   return {
//     mail: state.form.mail,
//     password: state.form.password,
//   };
// }
export default LoginReduxFormContainer;
