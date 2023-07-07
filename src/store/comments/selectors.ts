import { IInitialComments } from "./../../types/comments";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const commentsSelector = (state: RootState) => state.comments;

const commentsListSelector = createSelector(
  [commentsSelector],
  (comments: IInitialComments) => comments.commentsList
);

const commentSelector = createSelector(
  [commentsSelector],
  (comments: IInitialComments) => comments.comment
);

export const commentsSel = {
  commentsListSelector,
  commentSelector,
};
