import {call, put, takeEvery} from "redux-saga/effects";
import {getColumnsService} from "../../services/columnService";
import {getColumnsSuccess} from '../ducks/column'
import { setError, loadingOff, loadingOn } from "../ducks/meta";
import {GET_COLUMNS} from "../ducks/column/types";
import {Column} from "../../interfaces/column";

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
