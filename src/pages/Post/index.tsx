import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<IPost | null>(null);

  const getPost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      setPost(await response.json());
    } catch (error) {
      console.log("error", error);
    }
  };

  const deletePost = async (id: number) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });

      navigate("/posts");
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

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
