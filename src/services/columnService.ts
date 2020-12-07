import axios from 'axios';
import {AsyncStorage} from "react-native";
import {ColumnForPost} from "../interfaces/column";

const GET_COLUMN_API_ENDPOINT = 'http://trello-purrweb.herokuapp.com/columns';
const POST_COLUMN_API_ENDPOINT = 'http://trello-purrweb.herokuapp.com/columns';

export async function getColumnsService() {
  const token = await AsyncStorage.getItem('token')
  const response = await axios.get(GET_COLUMN_API_ENDPOINT, {
    headers: {
      "Authorization": `bearer ${token}`
    }
  })
  return response.data
}

// export async function postColumnService(column: ColumnForPost) {
//   const token = await AsyncStorage.getItem('token')
//   const response = await axios.post(GET_COLUMN_API_ENDPOINT, column, {
//     headers: {
//       "Authorization": `bearer ${token}`
//     }
//   })
//   return response.data
// }
