import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {Card} from '../interfaces/card';

const CARD_API_ENDPOINT = 'http://trello-purrweb.herokuapp.com/cards';

export async function getCardsService(): Promise<Card[]> {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.get(CARD_API_ENDPOINT, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return response.data;
}
