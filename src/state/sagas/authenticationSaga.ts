import {call, put} from 'redux-saga/effects';
import {
  loginUserService,
  registerUserService,
} from '@services/authenticationService';
import {loginSuccess} from '@ducks/user';
import {updateColumns} from '@ducks/column'
import {getColumns} from "@ducks/column/actions";
import {LoginAction, RegisterAction} from '@ducks/user/types';

export function* registerSaga(action: RegisterAction) {
  const data = yield call(registerUserService, action.payload);
  if (data.columns && data.name) {
    yield put(updateColumns(data.columns))
    yield put(loginSuccess(data.name));
  }
}

export function* loginSaga(action: LoginAction) {
  const data = yield call(loginUserService, action.payload);
  if (data.name && data.name !== 'EntityNotFound') {
    yield put(getColumns())
    yield put(loginSuccess(data.name));
  }
}
