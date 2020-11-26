import {Comment} from "../../../interfaces/comment";

export const selectCardComments = (state: any, cardId: Comment['cardId']) => {
  return state.comments.filter((comment: Comment) => comment.cardId === cardId);
};
