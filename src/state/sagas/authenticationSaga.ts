import {call, put, takeLatest} from 'redux-saga/effects';
// TODO: fix community AsyncStorage and use it instead
import {AsyncStorage} from 'react-native';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  loginUserService,
  registerUserService,
} from '../../services/authenticationService';
import {loginSuccess} from '../ducks/user';
import {getColumnsSuccess, getColumns} from '../ducks/column';
import {loadingOn, setError, loadingOff} from '../ducks/meta';
import {SIGN_IN, SIGN_UP} from '../ducks/user/types';
import {
  LoginPayload,
  LoginResponseData,
  RegisterPayload,
  RegisterResponseData,
} from '../../interfaces/user';

function* register(action: PayloadAction<RegisterPayload>) {
  yield put(loadingOn());
  try {
    const data: RegisterResponseData = yield call(
      registerUserService,
      action.payload,
    );

    if (data.token) {
      // Server returns token, if registration was successful
      yield call(AsyncStorage.setItem, 'token', data.token);
      yield put(getColumnsSuccess(data.columns));
      yield put(loginSuccess({name: data.name, id: data.id}));
      yield put(loadingOff());
    } else {
      yield put(setError('Registration failed'));
      yield put(loadingOff());
    }
  } catch (e) {
    yield put(setError('Network error'));
    yield put(loadingOff());
  }
}

function* login(action: PayloadAction<LoginPayload>) {
  yield put(loadingOn());
  try {
    const data: LoginResponseData = yield call(
      loginUserService,
      action.payload,
    );

    if (data.token) {
      // Server returns token, if authentication was successful
      yield call(AsyncStorage.setItem, 'token', data.token);
      yield put(loginSuccess({name: data.name, id: data.id}));
      yield put(loadingOff());
    } else {
      yield put(setError(data.message || 'Wrong email or password'));
      yield put(loadingOff());
    }
  } catch (e) {
    yield put(setError(e.message || 'Network error'));
    yield put(loadingOff());
  }
}

export function* watchUserAuthentication() {
  yield takeLatest(SIGN_UP, register);
  yield takeLatest(SIGN_IN, login);
}
