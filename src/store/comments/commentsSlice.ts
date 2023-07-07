import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialComments } from "./initialComments";
import { IComment, IInitialComments } from "../../types";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: initialComments,
  reducers: {
    setComments(state: IInitialComments, action: PayloadAction<IComment[]>) {
      state.commentsList = action.payload;
    },

    setComment(state: IInitialComments, action: PayloadAction<IComment>) {
      state.comment = action.payload;
    },

    createComment(state: IInitialComments, action: PayloadAction<IComment>) {
      const newCommentsList = [...state.commentsList, action.payload];

      state.commentsList = newCommentsList;
    },
  },
});
