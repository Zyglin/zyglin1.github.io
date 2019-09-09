import React from 'react';

const LoginSuccesView = props => {
  return (
    <form>
      <p>
        <label>
          <p>d</p>
          Mail: <input type="text" name="mail" />
        </label>
      </p>
      <p>
        <label>
          {' '}
          Password: <input type="password" name="password" />
        </label>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  );
};

export default LoginSuccesView;
