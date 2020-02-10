// @flow

import { takeLatest } from 'redux-saga/effects';
import { actions } from '../modules/login';
import createRequestSaga from '../util/createRequestSaga';

function* loginAPI() {}

const login = createRequestSaga(actions, loginAPI);

export default function* watchLogin(): Generator<any, void, any> {
  yield takeLatest(actions.REQUEST, login);
}
