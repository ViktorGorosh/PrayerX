import {all} from 'redux-saga/effects';
import {watchUserAuthentication} from './authentication';
import {watchColumns} from './column';
import {watchCards} from './card';
import {watchComments} from './comment';

export default function* rootSaga() {
  yield all([
    watchUserAuthentication(),
    watchColumns(),
    watchCards(),
    watchComments(),
  ]);
}
