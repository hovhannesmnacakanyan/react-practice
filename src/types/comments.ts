export interface IComment {
  postId: number;
  id?: number;
  name: string;
  email: string;
  body: string;
}

export interface IInitialComments {
  commentsList: IComment[];
  comment: IComment | null;
}
