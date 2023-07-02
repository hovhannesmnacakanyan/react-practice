import { IPost } from "../../pages";
import { useNavigate } from "react-router-dom";
import "./styles.css";

interface IPropCard {
  post: IPost;
}

export const PostCard = (props: IPropCard) => {
  const { title, body, id } = props.post;
  const navigate = useNavigate();

  return (
    <div className="post-card" onClick={() => navigate(`${id}`)}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
