import {call, put, takeLatest} from 'redux-saga/effects';
import {
  loginUserService,
  registerUserService,
} from '../../services/authenticationService';
import {loginSuccess, loginFailure, loginError, loadingOn} from '../ducks/user';
import {updateColumns} from '../ducks/column';
import {getColumns} from "../ducks/column/actions";
import {LoginAction, RegisterAction, SIGN_IN, SIGN_UP} from '../ducks/user/types';

function* register(action: RegisterAction) {
  yield put(loadingOn())
  try {
    const data = yield call(registerUserService, action.payload);

    if (data.columns) { // Server returns default columns, if registration was successful
      yield put(updateColumns(data.columns))
      yield put(loginSuccess(data.name));
    } else {
      yield put(loginFailure())
    }

  } catch (e) {
    yield put(loginError())
  }
}

function* login(action: LoginAction) {
  yield put(loadingOn())
  try {
    const data = yield call(loginUserService, action.payload);

    if (data.columns) {
      yield put(loginSuccess(data.name));
    } else {
      yield put(loginFailure())
    }

  } catch (e) {
    yield put(loginError())
  }
}

export function* watchUserAuthentication() {
  yield takeLatest(SIGN_UP, register);
  yield takeLatest(SIGN_IN, login);
}
