import {configureStore} from '@reduxjs/toolkit';
import userReducer from './state/ducks/user';
import columnsReducer from './state/ducks/column';
import cardsReducer from './state/ducks/card';
import commentsReducer from './state/ducks/comment';

export default configureStore({
  reducer: {
    user: userReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    comments: commentsReducer,
  },
});
