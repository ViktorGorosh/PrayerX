import axios from 'axios';
import {LoginPayload, RegisterPayload, RegisterResponseData, LoginResponseData} from "../interfaces/user";

const REGISTER_API_ENDPOINT =
  'http://trello-purrweb.herokuapp.com/auth/sign-up';
const LOGIN_API_ENDPOINT = 'http://trello-purrweb.herokuapp.com/auth/sign-in';

export async function registerUserService(user: RegisterPayload): Promise<RegisterResponseData> {
  const response = await axios.post(REGISTER_API_ENDPOINT, user);
  return response.data;
}

export async function loginUserService(user: LoginPayload): Promise<LoginResponseData> {
  const response = await axios.post(LOGIN_API_ENDPOINT, user);
  return response.data;
}
