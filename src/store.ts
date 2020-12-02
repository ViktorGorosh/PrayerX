import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import userReducer from './state/ducks/user';
import columnsReducer from './state/ducks/column';
import cardsReducer from './state/ducks/card';
import commentsReducer from './state/ducks/comment';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    user: userReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    comments: commentsReducer,
  },
  middleware: getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
