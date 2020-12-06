import {Comment} from '../../../interfaces/comment';
import {Store} from "../../../interfaces/store";

export const selectCardComments = (state: Store, cardId: Comment['cardId']) => {
  return state.comments.filter((comment: Comment) => comment.cardId === cardId);
};
