import {createAction} from "@reduxjs/toolkit";
import {column} from './reducers';
import {GET_COLUMNS, POST_COLUMN, UPDATE_COLUMN} from "./types";
import {ColumnForPost, ColumnUpdate} from "../../../interfaces/column";

export const {getColumnsSuccess, updateColumnSuccess, postColumnSuccess} = column.actions;

export const getColumns = createAction(GET_COLUMNS)
export const postColumn = createAction(POST_COLUMN, function (payload: ColumnForPost) {
  return {payload}
})
export const updateColumn = createAction(UPDATE_COLUMN, function (payload: ColumnUpdate) {
  return {payload}
})
