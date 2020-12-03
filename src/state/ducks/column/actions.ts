import {createAction} from "@reduxjs/toolkit";
import {column} from './reducers';
import {GET_COLUMNS} from "./types";

export const {updateColumns, changeTitle, addColumn} = column.actions;

export const getColumns = createAction(GET_COLUMNS)
