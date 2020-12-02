import {takeLatest} from 'redux-saga/effects';
import {registerSaga, loginSaga} from './authenticationSaga';
import {SIGN_IN, SIGN_UP} from '../state/ducks/user/types';

export function* watchUserAuthentication() {
  yield takeLatest(SIGN_UP, registerSaga);
  yield takeLatest(SIGN_IN, loginSaga);
}
