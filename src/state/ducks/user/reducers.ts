import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../../interfaces/user';
import {LoginSuccessAction} from './types';

const initialState: User = {
  name: 'Aноним',
  isAuthorized: false,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action: LoginSuccessAction) => {
      state.name = action.payload;
      state.isAuthorized = true;
    },
  },
});

export default user.reducer;
