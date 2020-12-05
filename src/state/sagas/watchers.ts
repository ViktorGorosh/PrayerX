import {takeLatest, takeEvery} from 'redux-saga/effects';
import {registerSaga, loginSaga} from '@sagas/authenticationSaga';
import {getColumnsSaga} from '@sagas/columnSaga';
import {SIGN_IN, SIGN_UP} from '@ducks/user/types';
import {GET_COLUMNS} from "@ducks/column/types";

export function* watchUserAuthentication() {
  yield takeLatest(SIGN_UP, registerSaga);
  yield takeLatest(SIGN_IN, loginSaga);
}

export function* watchColumnsGet() {
  yield takeEvery(GET_COLUMNS, getColumnsSaga)
}
