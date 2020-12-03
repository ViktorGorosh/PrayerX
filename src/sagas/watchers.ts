import {takeLatest, takeEvery} from 'redux-saga/effects';
import {registerSaga, loginSaga} from './authenticationSaga';
import {getColumnsSaga} from './columnSaga';
import {SIGN_IN, SIGN_UP} from '../state/ducks/user/types';
import {GET_COLUMNS} from "../state/ducks/column/types";

export function* watchUserAuthentication() {
  yield takeLatest(SIGN_UP, registerSaga);
  yield takeLatest(SIGN_IN, loginSaga);
}

export function* watchColumnsGet() {
  yield takeEvery(GET_COLUMNS, getColumnsSaga)
}
