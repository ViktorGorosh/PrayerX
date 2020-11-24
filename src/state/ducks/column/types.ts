import {Column} from 'interfaces/column';

export interface ChangeTitleAction {
  type: string;
  payload: {
    id: Column['id'];
    newTitle: Column['title'];
  };
}
