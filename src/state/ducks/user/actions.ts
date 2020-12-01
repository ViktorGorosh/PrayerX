import {createAction} from "@reduxjs/toolkit";
import {user} from './reducers';

export const {login} = user.actions;

export const signUp = createAction('user/signUp',
  function (email: string, name: string, password: string) {
    return {
      payload: {
        email, name, password
      }
    }
  }
)

console.log(signUp('gorosh.viktor@gmail.com', 'ViktorGorosh', '1234'))
