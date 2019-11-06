/*
 *
 * SignUp reducer
 *
 */
import produce from 'immer';
import * as c from './constants';
import { loadState } from '../../utils/persistState';
const user = loadState();
export const initialState = {
  signupInfo: user || null,
  response: null,
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const signUpReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case c.DEFAULT_ACTION:
        return state;
      case c.SIGNUP_USER:
        return { ...state, signupInfo: action.payload };
      case c.CREATE_USER:
        return { ...state, loading: true };
      case c.SET_RESPONSE:
        return { ...state, response: action.payload, loading: false };
      default:
        return state;
    }
  });

export default signUpReducer;
