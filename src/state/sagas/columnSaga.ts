import {call, put, takeEvery} from "redux-saga/effects";
import {getColumnsService} from "../../services/columnService";
import {updateColumns} from '../ducks/column'
import {GET_COLUMNS} from "../ducks/column/types";

function* getColumnsSaga() {
  const data = yield call(getColumnsService);
  yield put(updateColumns(data.columns));
}

export function* watchColumnsGet() {
  yield takeEvery(GET_COLUMNS, getColumnsSaga)
}
