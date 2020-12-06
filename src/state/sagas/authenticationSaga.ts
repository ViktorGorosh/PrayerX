import {call, put, takeLatest} from 'redux-saga/effects';
// TODO: fix community AsyncStorage and use it instead
import {AsyncStorage} from 'react-native';
import {
  loginUserService,
  registerUserService,
} from '../../services/authenticationService';
import {loginSuccess, loginFailure, loginError, loadingOn} from '../ducks/user';
import {getColumnsSuccess, getColumns} from '../ducks/column';
import {LoginAction, RegisterAction, SIGN_IN, SIGN_UP} from '../ducks/user/types';

function* register(action: RegisterAction) {
  yield put(loadingOn())
  try {
    const data = yield call(registerUserService, action.payload);

    if (data.token) { // Server returns token, if registration was successful
      yield call(AsyncStorage.setItem, 'token', data.token);
      yield put(getColumnsSuccess(data.columns));
      yield put(loginSuccess({name: data.name, id: data.id}));
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

    if (data.token) { // Server returns token, if authentication was successful
      yield call(AsyncStorage.setItem, 'token', data.token)
      yield put(getColumns())
      yield put(loginSuccess({name: data.name, id: data.id}));
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
