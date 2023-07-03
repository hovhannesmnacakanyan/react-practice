import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { postsOp, postsSel } from "../../store/posts";

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const post = useSelector(postsSel.postSelector);

  const deletePost = (id: number) => {
    dispatch(postsOp.deletePost(id));

    navigate("/posts");
  };

  useEffect(() => {
    if (id) {
      dispatch(postsOp.getPostById(+id));
    }
  }, [dispatch, id]);

  return (
    <>
      {post?.title ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>User Id: {post.userId}</p>
          <p>Post Id: {post.id}</p>
          <button onClick={() => deletePost(post.id)}>Delete</button>
        </div>
      ) : (
        <h1>Post not found</h1>
      )}
    </>
  );
};
