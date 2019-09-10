export const MAIL_INPUT = 'MAIL_INPUT';
export const PASSWORD_INPUT = 'PASSWORD_INPUT';

export function mailEnter(mail) {
  return {
    type: MAIL_INPUT,
    payload: mail,
  };
}
export function passwordEnter(password) {
  return {
    type: PASSWORD_INPUT,
    payload: password,
  };
}
