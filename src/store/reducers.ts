import { combineReducers } from "@reduxjs/toolkit";

import { postsSlice } from "./posts";
import { commentsSlice } from "./comments";

export const reducers = () =>
  combineReducers({
    posts: postsSlice.reducer,
    comments: commentsSlice.reducer,
  });
