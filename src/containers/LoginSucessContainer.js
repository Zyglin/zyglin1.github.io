import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginSuccessView from '../views/LoginSuccess/LoginSuccessView';

class LoginSucessContainer extends React.Component {
  render() {
    return (
      <div>
        <p>d</p>
        <LoginSuccessView mail={this.props.mail} password={this.props.password} />
      </div>
    );
  }
}

LoginSucessContainer.propTypes = {
  mail: PropTypes.string,
  password: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    mail: state.loginredux.mail,
    password: state.loginredux.password,
  };
}

export default connect(mapStateToProps)(LoginSucessContainer);
