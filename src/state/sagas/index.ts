import {all} from 'redux-saga/effects';
import {watchUserAuthentication} from './authenticationSaga';
import {watchColumns} from './columnSaga';

export default function* rootSaga() {
  yield all([watchUserAuthentication(), watchColumns()]);
}
