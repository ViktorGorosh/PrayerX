import {createSlice} from '@reduxjs/toolkit';
import {Errors} from "../../../interfaces/errors";

const initialState: Errors = {
  getColumnsFailure: false,
  getColumnsError: false,
};

export const errors = createSlice({
  name: 'download',
  initialState,
  reducers: {
    resetErrors: () => initialState,
    getColumnsFailure: state => ({...state, getColumnsFailure: true}),
    getColumnsFailureOff: state => ({...state, getColumnsFailure: false}),
    getColumnsError: state => ({...state, getColumnsError: true}),
    getColumnsErrorOff: state => ({...state, getColumnsError: false}),
  },
});

export default errors.reducer;
