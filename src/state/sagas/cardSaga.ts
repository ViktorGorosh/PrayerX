import {call, put, takeEvery, takeLeading} from 'redux-saga/effects';
import {loadingOff, loadingOn, setError} from '../ducks/meta';
import {ADD_CARD, GET_CARDS, GET_CARD_BY_ID} from '../ducks/card/types';
import {
  getCardsSuccess,
  getCardById as getCard,
  addCardSuccess,
} from '../ducks/card';
import {
  addCardService,
  getCardsService,
  getCardByIdService,
} from '../../services/cardService';
import {Card, CardAddInfo} from '../../interfaces/card';
import {PayloadAction} from '@reduxjs/toolkit';
import {ColumnForPost} from '../../interfaces/column';

function* getCards() {
  yield put(loadingOn());
  try {
    const data: Card[] = yield call(getCardsService);
    console.log('Get cards: ', data);
    if (Array.isArray(data)) {
      // Server must return an array of cards

      yield put(getCardsSuccess(data));
      yield put(loadingOff());
    } else {
      yield put(setError("Can't download the cards"));
      yield put(loadingOff());
    }
  } catch (e) {
    yield put(setError(e.message));
    yield put(loadingOff());
  }
}

function* getCardById(action: PayloadAction<Card['id']>) {
  yield put(loadingOn());
  try {
    const data = yield call(getCardByIdService, action.payload);
    console.log('Get card by id: ', data);
    if (data.id) {
      // Server must return card
      yield put(addCardSuccess(data));
      yield put(loadingOff());
    } else {
      yield put(setError("Can't get card by id"));
      yield put(loadingOff());
    }
  } catch (e) {
    yield put(setError(e.message));
    yield put(loadingOff());
  }
}

function* addCard(action: PayloadAction<CardAddInfo>) {
  yield put(loadingOn());
  try {
    const data = yield call(addCardService, action.payload);
    console.log('Add card: ', data);
    if (data.id) {
      // Server must return added card
      yield put(getCard(data.id));
      yield put(loadingOff());
    } else {
      yield put(setError("Can't add card"));
      yield put(loadingOff());
    }
  } catch (e) {
    yield put(setError(e.message));
    yield put(loadingOff());
  }
}

export function* watchCards() {
  yield takeEvery(GET_CARDS, getCards);
  yield takeLeading(ADD_CARD, addCard);
  yield takeEvery(GET_CARD_BY_ID, getCardById);
}
