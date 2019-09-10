import React from 'react';
import PropTypes from 'prop-types';

const LoginSuccesView = props => {
  return (
    <form>
      <p>d</p>
      <div>
        <label>
          Mail: <input type="text" name="mail" value={props.mail} />
        </label>
      </div>
      <div>
        <label>
          {' '}
          Password: <input type="password" name="password" value={props.password} />
        </label>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

LoginSuccesView.propTypes = {
  mail: PropTypes.string,
  password: PropTypes.string,
};

export default LoginSuccesView;
