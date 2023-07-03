import { AppDispatch } from "..";
import { postsSlice } from "./postsSlice";

const getPosts = () => {
  const { setPosts } = postsSlice.actions;

  return async (dispatch: AppDispatch) => {
    try {
      const posts = await fetch("https://jsonplaceholder.typicode.com/posts");

      dispatch(setPosts(await posts.json()));
    } catch (error: any) {
      console.log(error);
    }
  };
};

const getPostById = (id: number) => {
  const { setPost } = postsSlice.actions;

  return async (dispatch: AppDispatch) => {
    try {
      const post = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      dispatch(setPost(await post.json()));
    } catch (error: any) {
      console.log(error);
    }
  };
};

const deletePost = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });

      dispatch(getPosts());
    } catch (error: any) {
      console.log(error);
    }
  };
};

const createPost = (body: { userId: number; title: string; body: string }) => {
  return async (dispatch: AppDispatch) => {
    const { setPosts } = postsSlice.actions;

    try {
      const post = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      dispatch(setPosts(await post.json()));
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const postsOp = {
  getPosts,
  getPostById,
  deletePost,
  createPost,
};
