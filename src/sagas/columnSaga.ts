import {call, put} from "redux-saga/effects";
import {getColumnsService} from "../services/columnService";
import {updateColumns} from '../state/ducks/column'

export function* getColumnsSaga() {
  const data = yield call(getColumnsService);
  yield put(updateColumns(data.columns))
}
