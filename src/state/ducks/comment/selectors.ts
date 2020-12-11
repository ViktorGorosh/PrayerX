import {Store} from '../../../store';
import {Comment} from '../../../interfaces/comment';

export const selectCardComments = (state: Store, cardId: Comment['cardId']) => {
  return state.comments.filter((comment: Comment) => comment.cardId === cardId);
};
export const selectCommentById = (state: Store, id: Comment['id']) => {
  return state.comments.find((comment: Comment) => comment.id === id);
};
