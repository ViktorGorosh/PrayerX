import {Card} from "../../../interfaces/card";

export const selectColumnCards = (state: any, colId: Card['colId']) => {
  return state.cards.filter((card: Card) => card.colId === colId);
};
