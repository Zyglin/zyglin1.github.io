import React from 'react';
import PropTypes from 'prop-types';

const LoginView = props => (
  <div>
    <div>
      <p>d</p>
    </div>
    <form onSubmit={props.handleOnSubmit}>
      <p>
        <label>
          {' '}
          Логин: <input type="text" name="login" value={props.login} onChange={props.handleLoginShow} />
        </label>
      </p>
      <p>
        <label>
          {' '}
          Пароль: <input type="password" name="password" value={props.password} onChange={props.handlePasswordShow} />
        </label>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
    <div>Текущее значение логина: {props.login}</div>
    <div>Текущее значение пароля: {props.password}</div>
  </div>
);

LoginView.propTypes = {
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleLoginShow: PropTypes.func.isRequired,
  handlePasswordShow: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};

export default LoginView;
