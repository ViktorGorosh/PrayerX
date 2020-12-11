import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {
  AddCardResponseData,
  Card,
  CardAddInfo,
  CardUpdateInfo,
  DeleteCardResponseData,
} from '../interfaces/card';

export const CARD_API_ENDPOINT = 'http://trello-purrweb.herokuapp.com/cards';

export async function getCardsService(): Promise<Card[]> {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.get(CARD_API_ENDPOINT, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return response.data;
}

export async function getCardByIdService(id: Card['id']): Promise<Card> {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.get(CARD_API_ENDPOINT + `/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return response.data;
}

export async function addCardService(
  card: CardAddInfo,
): Promise<AddCardResponseData> {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.post(CARD_API_ENDPOINT, card, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteCardService(
  id: Card['id'],
): Promise<DeleteCardResponseData> {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.delete(CARD_API_ENDPOINT + `/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
  return response.data;
}

export async function updateCardService(
  changes: CardUpdateInfo,
): Promise<Card> {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.put(
    CARD_API_ENDPOINT + `/${changes.id}`,
    changes,
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    },
  );
  console.log(response);
  return response.data;
}
