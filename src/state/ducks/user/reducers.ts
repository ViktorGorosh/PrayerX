import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../../interfaces/user';
import {LoginSuccessAction} from './types';

const initialState: User = {
  name: '',
  id: 0,
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
      name: action.payload.name,
      id: action.payload.id,
      isAuthorized: true,
      isLoading: false,
      isFailed: false,
      error: false,
    }),
    loginFailure: state => ({
      ...state,
      isLoading: false,
      isFailed: true,
      error: false
    }),
    loginError: state => ({
      ...state,
      isLoading: false,
      isFailed: false,
      error: true,
    })
  },
});

export default user.reducer;
