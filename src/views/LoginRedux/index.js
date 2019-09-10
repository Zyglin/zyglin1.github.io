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
          Mail: <input type="text" name="mail" value={props.mail} onChange={props.handleChangeMail} />
        </label>
      </p>
      <p>
        <label>
          {' '}
          Password: <input type="password" name="password" value={props.password} onChange={props.handleChangePassword} />
        </label>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
    <div>Mail value: {props.mail}</div>
    <div>Password value: {props.password}</div>
  </div>
);

LoginView.propTypes = {
  mail: PropTypes.string,
  password: PropTypes.string,
  handleChangePassword: PropTypes.func.isRequired,
  handleChangeMail: PropTypes.func.isRequired,
  handleValidateForm: PropTypes.func.isRequired,
};

export default LoginView;
