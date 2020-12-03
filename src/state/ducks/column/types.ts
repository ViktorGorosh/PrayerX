import {Column} from '../../../interfaces/column';

export const GET_COLUMNS = 'column/get'

export interface UpdateColumnsAction {
  type: string,
  payload: Array<Column>
}

export interface ChangeTitleAction {
  type: string;
  payload: {
    id: Column['id'];
    newTitle: Column['title'];
  };
}

export interface AddColumnAction {
  type: string;
  payload: Column['title'];
}
