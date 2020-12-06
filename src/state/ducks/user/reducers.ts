import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../../interfaces/user';
import {LoginSuccessAction} from './types';

const initialState: User = {
  name: '',
  isAuthorized: false,
  isLoading: false,
  isFailed: false,
  error: false,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadingOn: state => ({
      ...state,
      isLoading: true,
    }),
    loadingOff: state => ({
      ...state,
      isLoading: false,
    }),
    loginSuccess: (state, action: LoginSuccessAction) => ({
      ...state,
      name: action.payload,
      isAuthorized: true,
      isLoading: false,
    }),
    loginFailure: state => ({
      ...state,
      isLoading: false,
      isFailed: true,
    }),
    loginError: state => ({
      ...state,
      isLoading: false,
      error: true
    })
  },
});

export default user.reducer;
