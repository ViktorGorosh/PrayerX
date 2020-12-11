import {createAction} from '@reduxjs/toolkit';
import {card} from './reducers';
import {
  ADD_CARD,
  DELETE_CARD,
  GET_CARD_BY_ID,
  GET_CARDS,
  UPDATE_CARD,
} from './types';
import {Card, CardAddInfo, CardUpdateInfo} from '../../../interfaces/card';

export const {
  getCardsSuccess,
  addCardSuccess,
  deleteCardSuccess,
  updateCardSuccess,
} = card.actions;

export const getCards = createAction(GET_CARDS);
export const addCard = createAction(ADD_CARD, function (payload: CardAddInfo) {
  return {payload};
});
export const getCardById = createAction(GET_CARD_BY_ID, function (
  payload: Card['id'],
) {
  return {payload};
});
export const deleteCard = createAction(DELETE_CARD, function (
  payload: Card['id'],
) {
  return {payload};
});
export const updateCard = createAction(UPDATE_CARD, function (
  payload: CardUpdateInfo,
) {
  return {payload};
});
