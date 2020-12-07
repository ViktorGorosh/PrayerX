import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginSuccessPayload, User} from '../../../interfaces/user';

const initialState: User = {
  name: '',
  id: 0,
  isAuthorized: false,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginSuccessPayload>) => ({
      ...state,
      name: action.payload.name,
      id: action.payload.id,
      isAuthorized: true,
    }),
  },
});

export default user.reducer;
