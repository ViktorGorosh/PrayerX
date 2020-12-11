import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeEvery, takeLeading} from 'redux-saga/effects';
import {loadingOff, loadingOn, setError} from '../ducks/meta';
import {
  getCommentsSuccess,
  getCommentById as getComment,
  addCommentSuccess,
  deleteCommentSuccess,
  updateCommentSuccess,
} from '../ducks/comment';
import {
  addCommentService,
  getCommentsService,
  getCommentByIdService,
  deleteCommentService,
  updateCommentService,
} from '../../services/comment';
import {
  ADD_COMMENT,
  GET_COMMENTS,
  GET_COMMENT_BY_ID,
  DELETE_COMMENT,
  UPDATE_COMMENT,
} from '../ducks/comment/types';
import {
  Comment,
  AddCommentResponseData,
  CommentAddInfo,
  CommentUpdateInfo,
  DeleteCommentResponseData,
} from '../../interfaces/comment';

function* getComments() {
  yield put(loadingOn());
  try {
    const data: Comment[] = yield call(getCommentsService);
    console.log('Get comments: ', data);
    if (Array.isArray(data)) {
      // Server must return an array of Comments

      yield put(getCommentsSuccess(data));
      yield put(loadingOff());
    } else {
      yield put(setError("Can't download the comments"));
      yield put(loadingOff());
    }
  } catch (e) {
    yield put(setError(e.message));
    yield put(loadingOff());
  }
}

function* getCommentById(action: PayloadAction<Comment['id']>) {
  yield put(loadingOn());
  try {
    const data: Comment = yield call(getCommentByIdService, action.payload);
    console.log('Get Comment by id: ', data);
    if (data.id) {
      // Server must return Comment
      yield put(addCommentSuccess(data));
      yield put(loadingOff());
    } else {
      yield put(setError("Can't get Comment by id"));
      yield put(loadingOff());
    }
  } catch (e) {
    yield put(setError(e.message));
    yield put(loadingOff());
  }
}

function* addComment(action: PayloadAction<CommentAddInfo>) {
  yield put(loadingOn());
  try {
    const data: AddCommentResponseData = yield call(
      addCommentService,
      action.payload,
    );
    console.log('Add Comment: ', data);
    if (data.id) {
      // Server must return added Comment
      yield put(getComment(data.id));
      yield put(loadingOff());
    } else {
      yield put(setError("Can't add Comment"));
      yield put(loadingOff());
    }
  } catch (e) {
    yield put(setError(e.message));
    yield put(loadingOff());
  }
}

function* deleteComment(action: PayloadAction<Comment['id']>) {
  yield put(loadingOn());
  try {
    const data: DeleteCommentResponseData = yield call(
      deleteCommentService,
      action.payload,
    );
    console.log('Delete Comment: ', data);
    if (data.raw) {
      // yield put(deleteCommentSuccess(action.payload));
      yield put(loadingOff());
    } else {
      yield put(setError("Can't delete Comment"));
      yield put(loadingOff());
    }
  } catch (e) {
    yield put(setError(e.message));
    yield put(loadingOff());
  }
}

function* updateComment(action: PayloadAction<CommentUpdateInfo>) {
  yield put(loadingOn());
  try {
    const data: Comment = yield call(updateCommentService, action.payload);
    console.log('Update data: ', data);
    if (data.id) {
      // Server must return updated Comment
      // yield put(updateCommentSuccess(data));
      yield put(loadingOff());
    } else {
      yield put(setError("Can't update Comment"));
      yield put(loadingOff());
    }
  } catch (e) {
    yield put(setError(e.message));
    yield put(loadingOff());
  }
}

export function* watchComments() {
  yield takeEvery(GET_COMMENTS, getComments);
  yield takeEvery(GET_COMMENT_BY_ID, getCommentById);
  yield takeLeading(ADD_COMMENT, addComment);
  yield takeLeading(DELETE_COMMENT, deleteComment);
  yield takeEvery(UPDATE_COMMENT, updateComment);
}
