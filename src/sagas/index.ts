import {all, takeLatest, call, put} from 'redux-saga/effects';
import {SignUpAction} from '../state/ducks/user/types';
import {login} from '../state/ducks/user';
import {fetchSignUp} from '../services/user';

export function* signUp(action: SignUpAction) {
  const user = yield call(fetchSignUp, action.payload);
  yield put(login(user.name));
}

export function* watchSignUp() {
  yield takeLatest('user/signUp', signUp);
}

export default function* rootSaga() {
  yield all([watchSignUp()]);
}
