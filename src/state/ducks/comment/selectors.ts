export const selectCardComments = (state, cardId) => {
	return state.comments.filter(comment => comment.cardId === cardId)
}
