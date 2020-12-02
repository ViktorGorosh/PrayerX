import {createAction} from '@reduxjs/toolkit';
import {user} from './reducers';
import {RegisterAction, SIGN_UP, SIGN_IN, LoginAction} from './types';

export const {loginSuccess} = user.actions;

export const signUp = createAction(SIGN_UP, function (
  payload: RegisterAction['payload'],
) {
  return {payload};
});

export const signIn = createAction(SIGN_IN, function (
  payload: LoginAction['payload'],
) {
  return {payload};
});
