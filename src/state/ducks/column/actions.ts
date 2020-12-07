import {createAction} from "@reduxjs/toolkit";
import {column} from './reducers';
import {GET_COLUMNS, POST_COLUMN} from "./types";
import {ColumnForPost} from "../../../interfaces/column";

export const {getColumnsSuccess, changeTitle, postColumnSuccess} = column.actions;

export const getColumns = createAction(GET_COLUMNS)
export const postColumn = createAction(POST_COLUMN, function (payload: ColumnForPost) {
  return {payload}
})
