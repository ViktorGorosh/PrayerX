import axios from 'axios';
import {
  Column,
  ColumnForPost,
  ColumnUpdate,
  PostColumnResponseData,
  UpdateColumnResponseData,
} from '../interfaces/column';

const COLUMN_API_ENDPOINT = '/columns';

export async function getColumnsService(): Promise<Column[]> {
  const response = await axios.get(COLUMN_API_ENDPOINT);
  return response.data;
}

export async function postColumnService(
  column: ColumnForPost,
): Promise<PostColumnResponseData> {
  const response = await axios.post(COLUMN_API_ENDPOINT, column);
  return response.data;
}

export async function updateColumnService({
  title,
  description,
  id,
}: ColumnUpdate): Promise<UpdateColumnResponseData> {
  const response = await axios.put(`${COLUMN_API_ENDPOINT}/${id}`, {
    title,
    description,
  });
  return response.data;
}
