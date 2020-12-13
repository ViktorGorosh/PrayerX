import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeLeading} from 'redux-saga/effects';
import {loadingOff, loadingOn, setError} from '../ducks/meta';
import {
  addCardSuccess,
  deleteCardSuccess,
  getCardById as getCard,
  getCardsSuccess,
  updateCardSuccess,
} from '../ducks/card';
import {
  addCardService,
  deleteCardService,
  getCardByIdService,
  getCardsService,
  updateCardService,
} from '../../services/card';
import {
  ADD_CARD,
  DELETE_CARD,
  GET_CARD_BY_ID,
  GET_CARDS,
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
    } else {
      throw new Error("Can't download the cards");
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
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
    } else {
      throw new Error("Can't get card by id");
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
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
    } else {
      throw new Error("Can't add card");
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
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
    } else {
      throw new Error("Can't delete card");
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
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
    } else {
      throw new Error("Can't update card");
    }
  } catch (e) {
    yield put(setError(e.message));
  } finally {
    yield put(loadingOff());
  }
}

export function* watchCards() {
  yield takeLeading(GET_CARDS, getCards);
  yield takeLeading(GET_CARD_BY_ID, getCardById);
  yield takeLeading(ADD_CARD, addCard);
  yield takeLeading(DELETE_CARD, deleteCard);
  yield takeLeading(UPDATE_CARD, updateCard);
}
