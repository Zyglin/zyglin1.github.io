export const MAIL_INPUT = 'MAIL_INPUT';
export const PASSWORD_INPUT = 'PASSWORD_INPUT';
export const LOGIN_FAIL = 'PASSWORD_INPUT';

export function mailEnter(mail) {
  console.log(mail);
  return {
    type: MAIL_INPUT,
    text: mail,
  };
}
export function passwordEnter(password) {
  console.log(password);
  return {
    type: PASSWORD_INPUT,
    text: password,
  };
}

export function loginFail(validationText) {
  return {
    type: LOGIN_FAIL,
    text: validationText,
  };
}
