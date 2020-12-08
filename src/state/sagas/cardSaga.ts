import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeEvery, takeLeading} from 'redux-saga/effects';
import {loadingOff, loadingOn, setError} from '../ducks/meta';
import {
  getCardsSuccess,
  getCardById as getCard,
  addCardSuccess,
  deleteCardSuccess,
  updateCardSuccess,
} from '../ducks/card';
import {
  addCardService,
  getCardsService,
  getCardByIdService,
  deleteCardService,
  updateCardService,
} from '../../services/cardService';
import {
  ADD_CARD,
  GET_CARDS,
  GET_CARD_BY_ID,
  DELETE_CARD,
  UPDATE_CARD,
} from '../ducks/card/types';
import {
  AddCardResponseData,
  Card,
  CardAddInfo,
  CardUpdateInfo,
  DeleteCardResponseData,
} from '../../interfaces/card';

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
    const data: Card = yield call(getCardByIdService, action.payload);
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
    const data: AddCardResponseData = yield call(
      addCardService,
      action.payload,
    );
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

function* deleteCard(action: PayloadAction<Card['id']>) {
  yield put(loadingOn());
  try {
    const data: DeleteCardResponseData = yield call(
      deleteCardService,
      action.payload,
    );
    console.log('Delete card: ', data);
    if (data.raw) {
      yield put(deleteCardSuccess(action.payload));
      yield put(loadingOff());
    } else {
      yield put(setError("Can't delete card"));
      yield put(loadingOff());
    }
  } catch (e) {
    yield put(setError(e.message));
    yield put(loadingOff());
  }
}

function* updateCard(action: PayloadAction<CardUpdateInfo>) {
  yield put(loadingOn());
  try {
    const data: Card = yield call(updateCardService, action.payload);
    console.log('Update data: ', data);
    if (data.id) {
      // Server must return updated card
      yield put(updateCardSuccess(data));
      yield put(loadingOff());
    } else {
      yield put(setError("Can't update card"));
      yield put(loadingOff());
    }
  } catch (e) {
    yield put(setError(e.message));
    yield put(loadingOff());
  }
}

export function* watchCards() {
  yield takeEvery(GET_CARDS, getCards);
  yield takeEvery(GET_CARD_BY_ID, getCardById);
  yield takeLeading(ADD_CARD, addCard);
  yield takeLeading(DELETE_CARD, deleteCard);
  yield takeEvery(UPDATE_CARD, updateCard);
}
