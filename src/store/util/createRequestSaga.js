// @flow

import { put, call } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';
import { type RequestActionType } from './createRequestAction';

export default function createRequestSaga(
  actions: RequestActionType,
  api: any,
) {
  return function* requestSaga({
    payload,
  }: {
    payload: any,
  }): Generator<any, void, any> {
    try {
      yield put(startLoading({ type: actions.TYPE }));
      const result = yield call(api, payload);
      yield put(actions.success({ result }));
    } catch (e) {
      yield put(actions.failure({ error: `${e.name}: ${e.message}` }));
    } finally {
      yield put(finishLoading({ type: actions.TYPE }));
    }
  };
}
