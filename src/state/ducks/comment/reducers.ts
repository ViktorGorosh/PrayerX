import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Comment} from '../../../interfaces/comment';
import {
  AddCommentAction,
  DeleteCommentAction,
  UpdateCommentAction,
} from './types';

const initialState: Array<Comment> = [];

export const comment = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    getCommentsSuccess: (state, action: PayloadAction<Comment[]>) => {
      return action.payload;
    },
    addCommentSuccess: (state, action: AddCommentAction) => {
      return [...state, action.payload];
    },
    deleteCommentSuccess: (state, action: DeleteCommentAction) => {
      return state.filter((comment) => comment.id !== action.payload);
    },
    updateCommentSuccess: (state, action: UpdateCommentAction) => {
      return state.map((comment) => {
        if (comment.id === action.payload.id) {
          return {
            ...comment,
            ...action.payload,
          };
        }
        return comment;
      });
    },
  },
});

export default comment.reducer;
