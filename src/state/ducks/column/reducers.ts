import {createSlice} from '@reduxjs/toolkit';
import {Column} from '../../../interfaces/column';
import {ChangeTitleAction, AddColumnAction, UpdateColumnsAction} from './types';

const initialState: Array<Column> = [];

export const column = createSlice({
  name: 'column',
  initialState,
  reducers: {
    getColumnsSuccess: ((state, action: UpdateColumnsAction) => {
      return action.payload;
    }),
    changeTitle: (state, action: ChangeTitleAction) => {
      return state.map((column) => {
        if (column.id === action.payload.id) {
          return {...column, title: action.payload.newTitle};
        }

        return column;
      });
    },
    addColumn: (state, action: AddColumnAction) => {
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload,
          userId: Math.random()
        },
      ];
    },
  },
});

export default column.reducer;
