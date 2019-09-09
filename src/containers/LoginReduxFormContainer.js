/* eslint-disable class-methods-use-this */
import React from 'react';
import LoginReduxFormView from '../views/LoginReduxForm';

class LoginReduxFormContainer extends React.Component {
  handleSubmit = values => {
    // print the form values to the console
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

export default LoginReduxFormContainer;
