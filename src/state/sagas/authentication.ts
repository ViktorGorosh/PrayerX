import {call, put, takeLeading} from 'redux-saga/effects';
// TODO: fix community AsyncStorage and use it instead
import {AsyncStorage} from 'react-native';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  loginUserService,
  registerUserService,
} from '../../services/authentication';
import {loginSuccess} from '../ducks/user';
import {getColumnsSuccess} from '../ducks/column';
import {loadingOff, loadingOn, setError} from '../ducks/meta';
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
    console.log('Registration: ', data);
    if (data.token) {
      // Server returns token, if registration was successful
      yield call(AsyncStorage.setItem, 'token', data.token);
      yield put(getColumnsSuccess(data.columns));
      yield put(loginSuccess({name: data.name, id: data.id}));
    } else {
      throw new Error('Registration failed');
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
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
    console.log('Authorization: ', data);
    if (data.token) {
      // Server returns token, if authentication was successful
      yield call(AsyncStorage.setItem, 'token', data.token);
      yield put(loginSuccess({name: data.name, id: data.id}));
    } else {
      throw new Error('Wrong email or password');
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
    yield put(loadingOff());
  }
}

export function* watchUserAuthentication() {
  yield takeLeading(SIGN_UP, register);
  yield takeLeading(SIGN_IN, login);
}
