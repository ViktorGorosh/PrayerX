import axios from 'axios';
import {LoginAction, RegisterAction} from '../state/ducks/user/types';

export async function registerUserService(user: RegisterAction['payload']) {
  const REGISTER_API_ENDPOINT =
    'http://trello-purrweb.herokuapp.com/auth/sign-up';

  try {
    const response = await axios.post(REGISTER_API_ENDPOINT, user);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function loginUserService(user: LoginAction['payload']) {
  const LOGIN_API_ENDPOINT = 'http://trello-purrweb.herokuapp.com/auth/sign-in';

  try {
    const response = await axios.post(LOGIN_API_ENDPOINT, user);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}
