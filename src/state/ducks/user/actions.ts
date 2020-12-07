import {createAction} from '@reduxjs/toolkit';
import {user} from './reducers';
import {SIGN_UP, SIGN_IN} from './types';
import {LoginPayload, RegisterPayload} from "../../../interfaces/user";

export const {loginSuccess} = user.actions;

export const signUp = createAction(SIGN_UP, function (
  payload: RegisterPayload,
) {
  return {payload};
});

export const signIn = createAction(SIGN_IN, function (
  payload: LoginPayload,
) {
  return {payload};
});
