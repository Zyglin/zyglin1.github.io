/* eslint-disable import/no-mutable-exports */
import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined);
const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or less` : undefined);
const minLength6 = minLength(6);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const LoginReduxFormView = props => {
  const { handleSubmit, mail, password } = props;
  return (
    <div>
      <p>ff</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component={renderField} type="email" validate={[required, email]} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component={renderField} type="password" validate={[required, minLength6]} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>Mail CurrentValue: {mail}</div>
      <div>Password CurrentValue: {password}</div>
    </div>
  );
};

LoginReduxFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  mail: PropTypes.any,
  password: PropTypes.any,
};

renderField.propTypes = {
  input: PropTypes.any,
  label: PropTypes.any,
  type: PropTypes.any,
  meta: PropTypes.any,
};

let LoginRedForm = LoginReduxFormView;

LoginRedForm = reduxForm({
  form: 'login',
})(LoginRedForm);

// const selector = formValueSelector('login');
// LoginRedForm = connect(state => {
//   const hasEmailValue = selector(state, 'email');
//   const hasPasswordValue = selector(state, 'password');
//   return {
//     hasEmailValue,
//     hasPasswordValue,
//   };
// })(LoginRedForm);

export default LoginRedForm;
