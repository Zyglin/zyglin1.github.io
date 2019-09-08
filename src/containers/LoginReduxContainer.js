/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginRedux from '../views/LoginRedux';
import { mailEnter, passwordEnter } from '../views/LoginRedux/actions';

class LoginReduxContainer extends React.Component {
  handleChangeLogin = event => {
    this.props.mailEnter(event.target.value);
  };

  handleChangePassword = event => {
    this.props.passwordEnter(event.target.value);
  };

  pressLogin = () => {
    console.log(this.props.mail.length); // не работают без mapStateToProps(создаём пропсы)
    if (this.props.mail.length >= 6 && this.props.password.length >= 6) {
      this.props.history.push('login-redux/success');
    } else {
      alert('Ошибка в одном из полей количество символом меньше 6');
    }
  };

  validateForm = event => {
    event.preventDefault();
    this.pressLogin();
  };

  render() {
    const props = {
      handleChangeMail: this.handleChangeLogin,
      handleChangePassword: this.handleChangePassword,
      mail: this.props.mail,
      password: this.props.password,
      handleValidateForm: this.validateForm,
      validationText: this.props.validationText,
    };
    return <LoginRedux {...props} />;
  }
}

LoginReduxContainer.propTypes = {
  mailEnter: PropTypes.func.isRequired,
  passwordEnter: PropTypes.func.isRequired,
  mail: PropTypes.any,
  password: PropTypes.string,
  validationText: PropTypes.string,
  history: PropTypes.any,
};

function mapDispatchToProps(dispatch) {
  return {
    mailEnter: mail => dispatch(mailEnter(mail)),
    passwordEnter: password => dispatch(passwordEnter(password)),
  };
}

// Задать Ване вопрос
function mapStateToProps(state) {
  return {
    mail: state.mail,
    password: state.password,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginReduxContainer);
