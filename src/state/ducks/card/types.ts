import {Card, CardChanges} from '../../../interfaces/card';

export const GET_CARDS = 'card/get';
export const ADD_CARD = 'card/add';
export const GET_CARD_BY_ID = 'card/getById';
export const DELETE_CARD = 'card/delete';

export interface DeleteCardAction {
  type: string;
  payload: Card['id'];
}

export interface UpdateCardAction {
  type: string;
  payload: CardChanges;
}
