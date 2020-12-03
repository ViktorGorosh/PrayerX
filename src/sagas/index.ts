import {all} from 'redux-saga/effects';
import {watchColumnsGet, watchUserAuthentication} from './watchers';

export default function* rootSaga() {
  yield all([watchUserAuthentication(), watchColumnsGet()]);
}
