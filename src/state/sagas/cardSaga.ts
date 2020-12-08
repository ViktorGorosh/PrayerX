import {call, put, takeEvery} from 'redux-saga/effects';
import {loadingOff, loadingOn, setError} from '../ducks/meta';
import {GET_CARDS} from '../ducks/card/types';
import {getCardsSuccess} from '../ducks/card';
import {getCardsService} from '../../services/cardService';
import {Card} from '../../interfaces/card';

function* getCards() {
  yield put(loadingOn());
  try {
    const data: Card[] = yield call(getCardsService);
    console.log(data);
    if (Array.isArray(data)) {
      // Server must return an array of cards
      // yield put(getCardsSuccess(data));
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

export function* watchCards() {
  yield takeEvery(GET_CARDS, getCards);
}
