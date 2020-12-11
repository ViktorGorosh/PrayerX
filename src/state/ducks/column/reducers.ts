import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Column} from '../../../interfaces/column';
import {UpdateColumnItemAction} from './types';

const initialState: Array<Column> = [];

export const column = createSlice({
  name: 'column',
  initialState,
  reducers: {
    getColumnsSuccess: (state, action: PayloadAction<Column[]>) => {
      return action.payload;
    },
    updateColumnSuccess: (state, action: UpdateColumnItemAction) => {
      return state.map((column) => {
        if (column.id === action.payload.id) {
          return {...column, title: action.payload.newTitle};
        }

        return column;
      });
    },
    postColumnSuccess: (state, action: PayloadAction<Column>) => {
      return [...state, action.payload];
    },
  },
});

export default column.reducer;
