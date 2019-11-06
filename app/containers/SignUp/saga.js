import { takeLatest, call, put } from 'redux-saga/effects';
import { saveState } from '../../utils/persistState';
import { setToken } from '../../utils/axios';
import * as c from './constants';
import * as a from './actions';
import { registerApi } from './api';

export function* signup(action) {
  try {
    const { payload } = action;
    const response = yield call(registerApi, payload);
    const token = response.data ? response.data.data.token : null;
    yield setToken(token);
    saveState(response.data);
    yield put(a.signUpUserInfo(response.data.data));
    yield put(a.setResponse({ status: response.status, message: 'success' }));

  } catch (error) {
    if (error.response) {
      yield put(
        a.setResponse({
          status: error.response.status,
          message: error.response.data.message,
        }),
      );
    } else {
      yield put(a.setResponse({ status: 0, message: 'Something went wrong' }));
    }
  }
}
// Individual exports for testing
export default function* signUpSaga() {
  yield takeLatest(c.CREATE_USER, signup);
}
