import {createAction} from '@reduxjs/toolkit';
import {user} from './reducers';
import {SIGN_UP, RegisterAction} from './types';

export const {login} = user.actions;

export const signUp = createAction(SIGN_UP, function (
  payload: RegisterAction['payload'],
) {
  return {payload};
});
