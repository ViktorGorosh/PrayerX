import axios from 'axios';
import {AsyncStorage} from "react-native";

const GET_COLUMN_API_ENDPOINT = 'http://trello-purrweb.herokuapp.com/columns';

export async function getColumnsService() {
  const token = await AsyncStorage.getItem('token')
  const response = await axios.get(GET_COLUMN_API_ENDPOINT, {
    headers: {
      "Authorization": `bearer ${token}`
    }
  })
  return response.data
}
