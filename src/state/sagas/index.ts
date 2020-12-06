import {all} from 'redux-saga/effects';
import {watchUserAuthentication} from './authenticationSaga';
import {watchColumnsGet} from './columnSaga';

export default function* rootSaga() {
  yield all([watchUserAuthentication(), watchColumnsGet()]);
}
