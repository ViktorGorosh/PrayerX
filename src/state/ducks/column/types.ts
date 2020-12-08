import {Column, ColumnForPost} from '../../../interfaces/column';

export const GET_COLUMNS = 'column/get'
export const POST_COLUMN = 'column/post'
export const UPDATE_COLUMN = 'column/update'

export interface UpdateColumnsAction {
  type: string,
  payload: Array<Column>
}

export interface UpdateColumnItemAction {
  type: string;
  payload: {
    id: Column['id'];
    newTitle: Column['title'];
  };
}

export interface AddColumnAction {
  type: string;
  payload: Column;
}

export interface PostColumnAction {
  type: string,
  payload: ColumnForPost,
}
