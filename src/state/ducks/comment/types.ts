import {Comment, CommentUpdateInfo} from '../../../interfaces/comment';

export const GET_COMMENTS = 'comment/get';
export const ADD_COMMENT = 'comment/add';
export const GET_COMMENT_BY_ID = 'comment/getById';
export const DELETE_COMMENT = 'comment/delete';
export const UPDATE_COMMENT = 'comment/update';

export interface DeleteCommentAction {
  type: string;
  payload: Comment['id'];
}

export interface UpdateCommentAction {
  type: string;
  payload: CommentUpdateInfo;
}
