import { createSelector } from "reselect";
import { RootState } from "..";
import { IInitialPosts } from "./initialState";

const postsSelector = (state: RootState) => state.posts;

const postsListSelector = createSelector(
  [postsSelector],
  (posts: IInitialPosts) => posts.postsList
);

const postSelector = createSelector(
  [postsSelector],
  (posts: IInitialPosts) => posts.post
);

export const postsSel = {
  postsSelector,
  postsListSelector,
  postSelector,
};
