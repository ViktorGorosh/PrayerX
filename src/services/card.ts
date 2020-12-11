import axios from 'axios';
import {
  AddCardResponseData,
  Card,
  CardAddInfo,
  CardUpdateInfo,
  DeleteCardResponseData,
} from '../interfaces/card';

export const CARD_API_ENDPOINT = '/cards';

export async function getCardsService(): Promise<Card[]> {
  const response = await axios.get(CARD_API_ENDPOINT);
  return response.data;
}

export async function getCardByIdService(id: Card['id']): Promise<Card> {
  const response = await axios.get(`${CARD_API_ENDPOINT}/${id}`);
  return response.data;
}

export async function addCardService(
  card: CardAddInfo,
): Promise<AddCardResponseData> {
  const response = await axios.post(CARD_API_ENDPOINT, card);
  return response.data;
}

export async function deleteCardService(
  id: Card['id'],
): Promise<DeleteCardResponseData> {
  const response = await axios.delete(`${CARD_API_ENDPOINT}/${id}`);
  return response.data;
}

export async function updateCardService(
  changes: CardUpdateInfo,
): Promise<Card> {
  const response = await axios.put(
    `${CARD_API_ENDPOINT}/${changes.id}`,
    changes,
  );
  return response.data;
}
