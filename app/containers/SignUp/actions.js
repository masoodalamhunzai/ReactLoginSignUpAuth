/*
 *
 * SignUp actions
 *
 */

import * as c from './constants';

export function defaultAction() {
  return {
    type: c.DEFAULT_ACTION,
  };
}
export function createUser(payload) {
  return {
    type: c.CREATE_USER,
    payload,
  };
}
export function signUpUserInfo(payload) {
  return {
    type: c.SIGNUP_USER,
    payload,
  };
}
export function setResponse(payload) {
  return {
    type: c.SET_RESPONSE,
    payload,
  };
}
