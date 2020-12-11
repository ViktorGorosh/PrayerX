import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Card, CardChanges} from '../../../interfaces/card';

const initialState: Card[] = [];

export const card = createSlice({
  name: 'card',
  initialState,
  reducers: {
    getCardsSuccess: (state, action: PayloadAction<Card[]>) => {
      return action.payload;
    },
    addCardSuccess: (state, action: PayloadAction<Card>) => {
      return [...state, action.payload];
    },
    deleteCardSuccess: (state, action: PayloadAction<Card['id']>) => {
      return state.filter((card) => card.id !== action.payload);
    },
    updateCardSuccess: (state, action: PayloadAction<CardChanges>) => {
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
