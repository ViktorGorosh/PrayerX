import {takeLatest} from 'redux-saga/effects';
import {registerSaga} from './authenticationSaga';
import {SIGN_UP} from '../state/ducks/user/types';

export function* watchUserAuthentication() {
  yield takeLatest(SIGN_UP, registerSaga);
}
