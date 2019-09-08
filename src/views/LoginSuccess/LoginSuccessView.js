import React from 'react';
import PropTypes from 'prop-types';

const LoginSuccesView = props => {
  return (
    <form>
      <p>
        <label>
          {' '}
          Логин: <input type="text" name="mail" value={props.mail} />
        </label>
      </p>
      <p>
        <label>
          {' '}
          Пароль: <input type="password" name="password" value={props.password} />
        </label>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  );
};

LoginSuccesView.propTypes = {
  mail: PropTypes.string,
  password: PropTypes.string,
};

export default LoginSuccesView;
