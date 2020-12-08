import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Meta} from '../../../interfaces/meta';

const initialState: Meta = {
  isLoading: false,
  error: '',
};

export const meta = createSlice({
  name: 'download',
  initialState,
  reducers: {
    loadingOn: (state) => ({
      ...state,
      isLoading: true,
    }),
    loadingOff: (state) => ({
      ...state,
      isLoading: false,
    }),
    setError: (state, action: PayloadAction<string>) => ({
      ...state,
      error: action.payload,
    }),
    resetError: (state) => ({
      ...state,
      error: initialState.error,
    }),
  },
});

export default meta.reducer;
