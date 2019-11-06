/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import * as c from './constants';
import { loadState } from '../../utils/persistState';
const user = loadState();
export const initialState = {
  loggedInInfo: user || null,
  response: null, 
  loading: false,
}; 

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case c.DEFAULT_ACTION:
        return state;
      case c.LOGGED_IN_USER:
        return { ...state, loggedInInfo: action.payload };
      case c.LOGIN:
        return { ...state, loading: true };
      case c.SET_RESPONSE:
        return { ...state, response: action.payload, loading: false };
      default:
        return state;
    }
  });

export default loginReducer;
