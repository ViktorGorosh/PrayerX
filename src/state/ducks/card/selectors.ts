export const selectColumnCards = (state, colId) => {
  return state.cards.filter((card) => card.colId === colId);
};
