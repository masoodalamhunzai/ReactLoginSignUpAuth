// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put } from 'redux-saga/effects';
import * as c from './constants';
import { saveState } from '../../utils/persistState';
import * as a from './actions';
import { fetchLogin } from './api';
import { setToken } from '../../utils/axios';

export function* userlogin(action) {
  try {
    const { payload } = action;
    const response = yield call(fetchLogin, payload);
    const token = response.data ? response.data.data.token : null;
    yield setToken(token);
    saveState(response.data);
    yield put(a.loggedinUser(response.data.data));
    yield put(a.setResponse({ status: response.status, message: 'success' }));
  } catch (error) {
    if (error.response) {
      yield put(
        a.setResponse({
          status: error.response.status,
          message: 'Operation failed, Try again later',
        }),
      );
    } else {
      yield put(a.setResponse({ status: 0, message: 'Something went wrong' }));
    }
  }
}
// Individual exports for testing
export default function* loginSaga() {
  yield takeLatest(c.LOGIN, userlogin);
}
