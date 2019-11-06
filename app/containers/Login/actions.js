/*
 *
 * Login actions
 *
 */

import * as c from './constants';

export function defaultAction() {
  return {
    type: c.DEFAULT_ACTION,
  };
}
export function userLogin(payload) {
  return {
    type: c.LOGIN,
    payload,
  };
}
export function loggedinUser(payload) {
  return {
    type: c.LOGGED_IN_USER,
    payload,
  };
}
export function setResponse(payload) {
  return {
    type: c.SET_RESPONSE,
    payload,
  };
}
 
