import {PayloadAction} from "@reduxjs/toolkit";
import {call, put, takeEvery, takeLeading} from "redux-saga/effects";
import {getColumnsService, postColumnService} from "../../services/columnService";
import {getColumnsSuccess, postColumnSuccess} from '../ducks/column'
import { setError, loadingOff, loadingOn } from "../ducks/meta";
import {GET_COLUMNS, POST_COLUMN} from "../ducks/column/types";
import {Column, ColumnForPost, PostColumnResponseData} from "../../interfaces/column";

function* getColumns() {
  yield put(loadingOn())
  try {
    const data: Column[] = yield call(getColumnsService);

    if (Array.isArray(data)) { // Server must return an array of columns
      yield put(getColumnsSuccess(data));
      yield put(loadingOff())
    } else {
      yield put(setError("Can't download the columns"))
      yield put(loadingOff())
    }

  } catch (e) {
    yield put(setError('Network error'))
    yield put(loadingOff())
  }
}

function* postColumn(action: PayloadAction<ColumnForPost>) {
  yield put(loadingOn())
  try {
    const data: PostColumnResponseData = yield call(postColumnService, action.payload);
    if (data.title && data.id && data.user) { // Server must return full column
      yield put(postColumnSuccess({title: data.title, userId: data.user, id: data.id}));
      yield put(loadingOff())
    } else {
      yield put(setError('Failed to post column'))
      yield put(loadingOff())
    }
  } catch (e) {
    yield put(setError('Failed to post column - catch error'))
    yield put(loadingOff())
  }
}

export function* watchColumnsGet() {
  yield takeEvery(GET_COLUMNS, getColumns)
  yield takeLeading(POST_COLUMN, postColumn)
}
