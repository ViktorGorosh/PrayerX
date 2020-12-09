import {all} from 'redux-saga/effects';
import {watchUserAuthentication} from './authenticationSaga';
import {watchColumns} from './columnSaga';
import {watchCards} from './cardSaga';
import {watchComments} from './commentSaga';

export default function* rootSaga() {
  yield all([
    watchUserAuthentication(),
    watchColumns(),
    watchCards(),
    watchComments(),
  ]);
}
