import {createAction} from '@reduxjs/toolkit';
import {card} from './reducers';
import {GET_CARDS} from './types';

export const {
  getCardsSuccess,
  addCardSuccess,
  deleteCardSuccess,
  updateCardSuccess,
} = card.actions;

export const getCards = createAction(GET_CARDS);
