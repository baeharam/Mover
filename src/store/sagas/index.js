// @flow

import { all, call } from 'redux-saga/effects';
import login from './login';
import signup from './signup';

export default function* rootSaga(): Generator<any, void, any> {
  yield all([call(login), call(signup)]);
}
