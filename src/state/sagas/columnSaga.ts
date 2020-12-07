import {call, put, takeEvery} from "redux-saga/effects";
import {getColumnsService, postColumnService} from "../../services/columnService";
import {getColumnsSuccess} from '../ducks/column'
import {GET_COLUMNS} from "../ducks/column/types";
import { getColumnsFailure, getColumnsError } from "../ducks/meta";
import {ColumnForPost} from "../../interfaces/column";

function* getColumns() {
  try {
    const data = yield call(getColumnsService);

    if (Array.isArray(data)) { // Server must return an array of columns
      yield put(getColumnsSuccess(data));
    } else {
      yield put(getColumnsFailure())
    }
  } catch (e) {
    yield put(getColumnsError())
  }
}

// function* postColumn(payload: ColumnForPost) {
//   try {
//     const data = yield call(postColumnService, payload);
//
//     if (Array.isArray(data)) { // Server must return an array of columns
//       yield put(getColumnsSuccess(data));
//     } else {
//       yield put(getColumnsFailure())
//     }
//   } catch (e) {
//     yield put(getColumnsError())
//   }
// }

export function* watchColumnsGet() {
  yield takeEvery(GET_COLUMNS, getColumns)
}