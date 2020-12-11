import {Store} from '../../../store';
import {Column} from '../../../interfaces/column';
import {Card} from '../../../interfaces/card';

export const selectColumnCards = (state: Store, colId: Column['id']) => {
  return state.cards.filter((card: Card) => card.columnId === colId);
};

export const selectCardById = (state: Store, cardId: Card['id']) => {
  return state.cards.find((card: Card) => card.id === cardId);
};
