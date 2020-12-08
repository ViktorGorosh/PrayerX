import {Column} from './column';

export interface User {
  name: string;
  id: number;
  isAuthorized: boolean;
}

export interface UserExtended extends User {
  email: string;
  password: string;
}

export interface LoginPayload {
  email: UserExtended['email'];
  password: UserExtended['password'];
}

export interface RegisterPayload {
  name: User['name'];
  email: UserExtended['email'];
  password: UserExtended['password'];
}

export interface LoginSuccessPayload {
  name: User['name'];
  id: User['id'];
}

export interface RegisterResponseData {
  columns: Column[];
  email: UserExtended['email'];
  id: User['id'];
  name: User['name'];
  password: UserExtended['password'];
  token: string;
  message: string;
}

export interface LoginResponseData {
  email: UserExtended['email'];
  id: User['id'];
  name: User['name'];
  token: string;
  message: string;
}
