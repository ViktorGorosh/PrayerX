import axios from 'axios';
import {RegisterAction} from '../state/ducks/user/types';

export async function registerUserService(user: RegisterAction['payload']) {
  const REGISTER_API_ENDPOINT =
    'http://trello-purrweb.herokuapp.com/auth/sign-up';

  try {
    const response = await axios.post(REGISTER_API_ENDPOINT, user);
    console.log(response.data);
    if (response.status === 201) {
      return user;
    }
  } catch (error) {
    console.error(error);
  }
}
