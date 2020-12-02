import {call, put} from 'redux-saga/effects';
import {registerUserService} from '../services/authenticationService';
import {login} from '../state/ducks/user';
import {RegisterAction} from '../state/ducks/user/types';

export function* registerSaga(action: RegisterAction) {
  const user = yield call(registerUserService, action.payload);
  yield put(login(user.name));
}
