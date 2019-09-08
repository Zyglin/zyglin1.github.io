import React from 'react';
import PropTypes from 'prop-types';

const LoginView = props => (
  <div>
    <div>
      <p>d</p>
    </div>
    <form onSubmit={props.handleValidateForm}>
      <p>
        <label>
          {' '}
          Логин: <input type="text" name="mail" value={props.mail} onChange={props.handleChangeMail} />
        </label>
      </p>
      <p>
        <label>
          {' '}
          Пароль: <input type="password" name="password" value={props.password} onChange={props.handleChangePassword} />
        </label>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
    <div>Текущее значение логина: {props.mail}</div>
    <div>Текущее значение пароля: {props.password}</div>
  </div>
);

LoginView.propTypes = {
  mail: PropTypes.any,
  password: PropTypes.string,
  handleChangePassword: PropTypes.func.isRequired,
  handleChangeMail: PropTypes.func.isRequired,
  handleValidateForm: PropTypes.func.isRequired,
};

export default LoginView;
