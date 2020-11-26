import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';
import {Comment} from '../../../interfaces/comment';
import {
  AddCommentAction,
  DeleteCommentAction,
  UpdateCommentAction,
} from './types';

const initialState: Array<Comment> = [
  {
    id: 'f50955c6-2f50-40e6-aeb9-03266dca8c81',
    cardId: 'b8a1977a-2698-45d4-bb9a-7d975a1a267a',
    author: 'Author 1',
    text: 'Hello',
  },
];

export const comment = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action: AddCommentAction) => {
      return [
        ...state,
        {
          id: uuidv4(),
          ...action.payload,
        },
      ];
    },
    deleteComment: (state, action: DeleteCommentAction) => {
      return state.filter((comment) => comment.id !== action.payload);
    },
    updateComment: (state, action: UpdateCommentAction) => {
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
