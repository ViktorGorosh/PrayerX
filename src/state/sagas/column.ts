import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLeading} from 'redux-saga/effects';
import {
  getColumnsService,
  postColumnService,
  updateColumnService,
} from '../../services/column';
import {
  getColumnsSuccess,
  postColumnSuccess,
  updateColumnSuccess,
} from '../ducks/column';
import {loadingOff, loadingOn, setError} from '../ducks/meta';
import {GET_COLUMNS, POST_COLUMN, UPDATE_COLUMN} from '../ducks/column/types';
import {
  Column,
  ColumnForPost,
  ColumnUpdate,
  PostColumnResponseData,
  UpdateColumnResponseData,
} from '../../interfaces/column';

function* getColumns() {
  yield put(loadingOn());
  try {
    const data: Column[] = yield call(getColumnsService);
    console.log('Get columns: ', data);
    if (Array.isArray(data)) {
      // Server must return an array of columns
      yield put(getColumnsSuccess(data));
    } else {
      yield put(setError("Can't download the columns"));
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
    yield put(loadingOff());
  }
}

function* postColumn(action: PayloadAction<ColumnForPost>) {
  yield put(loadingOn());
  try {
    const data: PostColumnResponseData = yield call(
      postColumnService,
      action.payload,
    );
    console.log('Post column: ', data);
    if (data.title && data.id && data.user) {
      // Server must return new column
      yield put(
        postColumnSuccess({title: data.title, userId: data.user, id: data.id}),
      );
    } else {
      throw new Error('Failed to post column');
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
    yield put(loadingOff());
  }
}

function* updateColumn(action: PayloadAction<ColumnUpdate>) {
  yield put(loadingOn());
  try {
    const data: UpdateColumnResponseData = yield call(
      updateColumnService,
      action.payload,
    );
    console.log('Update column: ', data);
    if (data.title && data.id && data.userId) {
      // Server must return updated column
      yield put(updateColumnSuccess({id: data.id, newTitle: data.title}));
    } else {
      throw new Error('Failed to update column');
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
    yield put(loadingOff());
  }
}

export function* watchColumns() {
  yield takeLeading(GET_COLUMNS, getColumns);
  yield takeLeading(POST_COLUMN, postColumn);
  yield takeLeading(UPDATE_COLUMN, updateColumn);
}
