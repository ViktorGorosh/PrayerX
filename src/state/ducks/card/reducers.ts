import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
import {Card} from '../../../interfaces/card';
import {AddCardAction, DeleteCardAction, UpdateCardAction} from './types';

const initialState: Array<Card> = [
  {
    colId: '4cc2beae-3d4f-4363-a22a-12a6cebf37b9',
    id: 'b8a1977a-2698-45d4-bb9a-7d975a1a267a',
    title: 'Title 0',
    description: null,
    author: 'Author 0',
  },
  {
    colId: '1cf46274-7cda-41b4-bbe8-9e89e1a5ee8c',
    id: 'b8a1977a-2698-45d4-bb9a-7d975a1a267a',
    title: 'Title 1',
    description: null,
    author: 'Author 1',
  },
];

export const card = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (state, action: AddCardAction) => {
      return [
        ...state,
        {
          colId: action.payload.colId,
          id: uuidv4(),
          title: action.payload.newTitle,
          description: null,
          author: action.payload.author,
        },
      ];
    },
    deleteCard: (state, action: DeleteCardAction) => {
      return state.filter((card) => card.id !== action.payload);
    },
    updateCard: (state, action: UpdateCardAction) => {
      return state.map((card) => {
        if (card.id === action.payload.id) {
          return {
            ...card,
            ...action.payload,
          };
        }

        return card;
      });
    },
  },
});

export default card.reducer;
