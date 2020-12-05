import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@sagas/index';

import cardsReducer from '@ducks/card';
import columnsReducer from '@ducks/column';
import commentsReducer from '@ducks/comment';
import userReducer from '@ducks/user';

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
