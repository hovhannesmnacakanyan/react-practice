import { useEffect, useState } from "react";
import { PostCard } from "../../components";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { postsOp, postsSel } from "../../store/posts";
import { AppDispatch } from "../../store";

export const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(postsSel.postsListSelector);
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    dispatch(postsOp.getPosts());
  }, [dispatch]);

  const createPost = () => {
    if (userId && title && body) {
      dispatch(
        postsOp.createPost({
          userId: +userId,
          title,
          body,
        })
      );
    }
  };

  return (
    <div className="posts">
      <input value={userId} onChange={(e) => setUserId(e.target.value)} />
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={createPost}>Add post</button>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};
