import axios from 'axios';
import {SignUpAction} from '../state/ducks/user/types';

// TODO: add special interface for user in 'interfaces'
export async function fetchSignUp(user: SignUpAction['payload']) {
  try {
    const response = await axios.post(
      'http://trello-purrweb.herokuapp.com/auth/sign-up',
      user,
    );
    if (response.status === 201) {
      return user;
    }
  } catch (error) {
    console.error(error);
  }
}

// export async function fetchSignUp() {
//   try {
//     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     })
//     console.log(response.data)
//   } catch (error) {
//     console.error(error)
//   }
// }
