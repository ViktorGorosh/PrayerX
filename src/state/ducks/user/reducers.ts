import {createSlice} from '@reduxjs/toolkit';
import {User} from 'interfaces/user';
import {LoginAction} from './types';

const initialState: User = {
  name: 'Aноним',
  isAuthorized: false,
};

export const user = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: LoginAction) => {
      state.name = action.payload;
      state.isAuthorized = true;
    },
  },
});

export default user.reducer;
