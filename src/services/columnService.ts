import axios from 'axios';

export async function getColumnsService() {
  const GET_COLUMN_API_ENDPOINT = 'http://trello-purrweb.herokuapp.com/columns';

  try {
    const response = await axios.get(GET_COLUMN_API_ENDPOINT, {
      headers: {
        Authorization: 'bearer',
      },
    });
    console.log(response.status);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}
