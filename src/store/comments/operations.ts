import { AppDispatch } from "..";
import { IComment } from "../../types";
import { commentsSlice } from "./commentsSlice";

const getComments = () => {
  return async (dispatch: AppDispatch) => {
    const { setComments } = commentsSlice.actions;

    try {
      const comments = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );

      dispatch(setComments(await comments.json()));
    } catch (error) {
      console.log(error);
    }
  };
};

const getCommentById = (id: number) => {
  return async (dispatch: AppDispatch) => {
    const { setComment } = commentsSlice.actions;

    try {
      const comment = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${id}`
      );

      dispatch(setComment(await comment.json()));
    } catch (error) {
      console.log(error);
    }
  };
};

const createComment = (body: IComment) => {
  return async (dispatch: AppDispatch) => {
    const { createComment } = commentsSlice.actions;

    try {
      const comment = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      dispatch(createComment(await comment.json()));
    } catch (error) {
      console.log(error);
    }
  };
};

export const commentsOp = { getComments, getCommentById, createComment };
