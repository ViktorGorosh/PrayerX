import {Column} from '../../../interfaces/column';

export const GET_COLUMNS = 'column/get';
export const POST_COLUMN = 'column/post';
export const UPDATE_COLUMN = 'column/update';

export interface UpdateColumnItemAction {
  type: string;
  payload: {
    id: Column['id'];
    newTitle: Column['title'];
  };
}
