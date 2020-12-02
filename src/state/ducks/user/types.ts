export const SIGN_UP = 'user/signUp';

export interface LoginAction {
  type: string;
  payload: string;
}

export interface SignUpAction {
  type: string;
  payload: {
    email: string;
    name: string;
    password: string;
  };
}
