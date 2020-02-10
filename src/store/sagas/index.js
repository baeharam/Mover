// @flow

import { all, call } from 'redux-saga/effects';
import login from './login';

export default function* rootSaga(): Generator<any, void, any> {
  yield all([call(login)]);
}
