import {User} from '@interfaces/user';

export const SIGN_UP = 'user/register';
export const SIGN_IN = 'user/login';

export interface RegisterAction {
  type: string;
  payload: {
    email: string;
    name: User['name'];
    password: string;
  };
}

export interface LoginAction {
  type: string;
  payload: {
    email: string;
    password: string;
  };
}

export interface LoginSuccessAction {
  type: string;
  payload: User['name'];
}
