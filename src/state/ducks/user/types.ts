import {User, LoginInfo, RegisterInfo} from '../../../interfaces/user';

export const SIGN_UP = 'user/register';
export const SIGN_IN = 'user/login';

export interface RegisterAction {
  type: string;
  payload: RegisterInfo;
}

export interface LoginAction {
  type: string;
  payload: LoginInfo;
}

export interface LoginSuccessAction {
  type: string;
  payload: User['name'];
}
