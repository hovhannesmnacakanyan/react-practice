import { IPost } from "../../pages";

export interface IInitialPosts {
  postsList: IPost[];
  post: IPost | null;
}

export const initialPosts: IInitialPosts = {
  postsList: [],
  post: null,
};
