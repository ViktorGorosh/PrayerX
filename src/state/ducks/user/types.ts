export const SIGN_UP = 'user/register';

export interface LoginAction {
  type: string;
  payload: string;
}

export interface RegisterAction {
  type: string;
  payload: {
    email: string;
    name: string;
    password: string;
  };
}
