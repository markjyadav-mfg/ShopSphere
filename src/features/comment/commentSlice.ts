import { createSlice } from '@reduxjs/toolkit';
import type{  PayloadAction } from '@reduxjs/toolkit';
import type{ Comment } from '../../types';

interface CommentState {
  comments: Comment[];
}

const initialState: CommentState = {
  comments: [],
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
    deleteComment: (state, action: PayloadAction<string>) => {
      state.comments = state.comments.filter(c => c.id !== action.payload);
    },
  },
});

export const { addComment, deleteComment } = commentSlice.actions;
export default commentSlice.reducer;