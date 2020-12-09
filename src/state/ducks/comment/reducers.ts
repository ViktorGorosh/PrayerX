import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Comment, CommentUpdateInfo} from '../../../interfaces/comment';

const initialState: Array<Comment> = [];

export const comment = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    getCommentsSuccess: (state, action: PayloadAction<Comment[]>) => {
      return action.payload;
    },
    addCommentSuccess: (state, action: PayloadAction<Comment>) => {
      return [...state, action.payload];
    },
    deleteCommentSuccess: (state, action: PayloadAction<Comment['id']>) => {
      return state.filter((comment) => comment.id !== action.payload);
    },
    updateCommentSuccess: (state, action: PayloadAction<CommentUpdateInfo>) => {
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
