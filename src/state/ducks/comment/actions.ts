import {createAction} from '@reduxjs/toolkit';
import {comment} from './reducers';
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_COMMENT_BY_ID,
  GET_COMMENTS,
  UPDATE_COMMENT,
} from './types';
import {
  Comment,
  CommentAddInfo,
  CommentUpdateInfo,
} from '../../../interfaces/comment';

export const {
  getCommentsSuccess,
  addCommentSuccess,
  deleteCommentSuccess,
  updateCommentSuccess,
} = comment.actions;

export const getComments = createAction(GET_COMMENTS);
export const addComment = createAction(ADD_COMMENT, function (
  payload: CommentAddInfo,
) {
  return {payload};
});
export const getCommentById = createAction(GET_COMMENT_BY_ID, function (
  payload: Comment['id'],
) {
  return {payload};
});
export const deleteComment = createAction(DELETE_COMMENT, function (
  payload: Comment['id'],
) {
  return {payload};
});
export const updateComment = createAction(UPDATE_COMMENT, function (
  payload: CommentUpdateInfo,
) {
  return {payload};
});
