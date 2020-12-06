import {call, put} from 'redux-saga/effects';
import {
  loginUserService,
  registerUserService,
} from '../services/authenticationService';
import {loginSuccess} from '../state/ducks/user';
import {updateColumns} from '../state/ducks/column'
import {getColumns} from "../state/ducks/column/actions";
import {LoginAction, RegisterAction} from '../state/ducks/user/types';

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
    // yield put(getColumns())
    yield put(loginSuccess(data.name));
  }
}
