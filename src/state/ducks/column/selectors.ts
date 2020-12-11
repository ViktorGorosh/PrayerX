import {Store} from '../../../store';
import {Column} from '../../../interfaces/column';

export const selectColumns = (state: Store) => state.columns;
export const selectColumnById = (state: Store, colId: Column['id']) => {
  return state.columns.find((column) => column.id === colId);
};
