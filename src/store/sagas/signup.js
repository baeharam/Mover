
import { takeLatest } from 'redux-saga/effects';
import { actions } from '../modules/signup';
import createRequestSaga from '../util/createRequestSaga';

function* signupAPI() {}

const signup = createRequestSaga(actions, signupAPI);

export default function* watchLogin(): Generator<any, void, any> {
  yield takeLatest(actions.REQUEST, signup);
}
