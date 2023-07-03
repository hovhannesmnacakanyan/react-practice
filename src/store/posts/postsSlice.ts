import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialPosts, initialPosts } from "./initialState";
import { IPost } from "../../pages";

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialPosts,
  reducers: {
    setPosts(state: IInitialPosts, action: PayloadAction<IPost[]>) {
      state.postsList = action.payload;
    },

    setPost(state: IInitialPosts, action: PayloadAction<IPost>) {
      state.post = action.payload;
    },
  },
});
