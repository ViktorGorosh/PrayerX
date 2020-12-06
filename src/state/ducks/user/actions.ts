import {createAction} from '@reduxjs/toolkit';
import {user} from './reducers';
import {SIGN_UP, SIGN_IN} from './types';
import {LoginInfo, RegisterInfo} from "../../../interfaces/user";

export const {loginSuccess, loginFailure, loginError, loadingOff, loadingOn} = user.actions;

export const signUp = createAction(SIGN_UP, function (
  payload: RegisterInfo,
) {
  return {payload};
});

export const signIn = createAction(SIGN_IN, function (
  payload: LoginInfo,
) {
  return {payload};
});
