import axios from 'axios';
import {AsyncStorage} from "react-native";
import {
  Column,
  ColumnForPost,
  ColumnUpdate,
  PostColumnResponseData,
  UpdateColumnResponseData
} from "../interfaces/column";

const COLUMN_API_ENDPOINT = 'http://trello-purrweb.herokuapp.com/columns';

export async function getColumnsService(): Promise<Column[]> {
  const token = await AsyncStorage.getItem('token')
  const response = await axios.get(COLUMN_API_ENDPOINT, {
    headers: {
      "Authorization": `bearer ${token}`
    }
  })
  return response.data
}

export async function postColumnService(column: ColumnForPost): Promise<PostColumnResponseData> {
  const token = await AsyncStorage.getItem('token')
  const response = await axios.post(COLUMN_API_ENDPOINT, column, {
    headers: {
      "Authorization": `bearer ${token}`
    }
  })
  return response.data
}

export async function updateColumnService({title, description, id}: ColumnUpdate): Promise<UpdateColumnResponseData> {
  const token = await AsyncStorage.getItem('token')
  const response = await axios.put(COLUMN_API_ENDPOINT + `/${id}`, {title, description}, {
    headers: {
      "Authorization": `bearer ${token}`
    }
  })
  return response.data
}
