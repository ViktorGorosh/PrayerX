import {Card} from '../../../interfaces/card';

export const selectColumnCards = (state: any, colId: number) => {
  return state.cards.filter((card: Card) => card.colId === colId);
};
