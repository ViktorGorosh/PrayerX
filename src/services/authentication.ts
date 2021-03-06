import axios from 'axios';
import {
  LoginPayload,
  LoginResponseData,
  RegisterPayload,
  RegisterResponseData,
} from '../interfaces/user';

const REGISTER_API_ENDPOINT = '/auth/sign-up';
const LOGIN_API_ENDPOINT = '/auth/sign-in';

export async function registerUserService(
  user: RegisterPayload,
): Promise<RegisterResponseData> {
  const response = await axios.post(REGISTER_API_ENDPOINT, user);
  return response.data;
}

export async function loginUserService(
  user: LoginPayload,
): Promise<LoginResponseData> {
  const response = await axios.post(LOGIN_API_ENDPOINT, user);
  return response.data;
}
