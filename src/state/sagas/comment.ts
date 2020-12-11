import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeEvery, takeLeading} from 'redux-saga/effects';
import {loadingOff, loadingOn, setError} from '../ducks/meta';
import {
  addCommentSuccess,
  getCommentById as getComment,
  getCommentsSuccess,
} from '../ducks/comment';
import {
  addCommentService,
  deleteCommentService,
  getCommentByIdService,
  getCommentsService,
  updateCommentService,
} from '../../services/comment';
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_COMMENT_BY_ID,
  GET_COMMENTS,
  UPDATE_COMMENT,
} from '../ducks/comment/types';
import {
  AddCommentResponseData,
  Comment,
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
    } else {
      throw new Error("Can't download the comments");
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
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
    } else {
      throw new Error("Can't get Comment by id");
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
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
    } else {
      throw new Error("Can't add Comment");
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
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
    } else {
      throw new Error("Can't delete Comment");
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
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
    } else {
      throw new Error("Can't update Comment");
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
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
