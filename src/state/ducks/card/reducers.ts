import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
import {Card} from '../../../interfaces/card';
import {AddCardAction, DeleteCardAction, UpdateCardAction} from './types';

const initialState: Array<Card> = [];

export const card = createSlice({
  name: 'card',
  initialState,
  reducers: {
    getCardsSuccess: (state, action: PayloadAction<Card[]>) => {
      return action.payload;
    },
    addCardSuccess: (state, action: AddCardAction) => {
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
    deleteCardSuccess: (state, action: DeleteCardAction) => {
      return state.filter((card) => card.id !== action.payload);
    },
    updateCardSuccess: (state, action: UpdateCardAction) => {
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
