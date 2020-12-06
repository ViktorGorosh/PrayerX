import axios from 'axios';
import {LoginInfo, RegisterInfo} from "../interfaces/user";

const REGISTER_API_ENDPOINT =
  'http://trello-purrweb.herokuapp.com/auth/sign-up';
const LOGIN_API_ENDPOINT = 'http://trello-purrweb.herokuapp.com/auth/sign-in';

export async function registerUserService(user: RegisterInfo) {
  const response = await axios.post(REGISTER_API_ENDPOINT, user);
  return response.data;
}

export async function loginUserService(user: LoginInfo) {
  const response = await axios.post(LOGIN_API_ENDPOINT, user);
  return response.data;
}
