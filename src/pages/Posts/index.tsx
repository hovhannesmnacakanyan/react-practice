import { useEffect, useState } from "react";
import { IPost } from "../Post";
import { PostCard } from "../../components";
import "./styles.css";

export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    setPosts(await response.json());
  };

  useEffect(() => {
    try {
      getPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};
