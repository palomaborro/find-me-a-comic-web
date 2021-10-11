import { useState } from "react";
import { createComment } from "../../services/ComicService";
import "./CommentForm.css";
import { useAuth } from "../../hooks/useAuth";

export default function CommentForm({ comicId, onCreate }) {
  const [comment, setComment] = useState({ description: "" });
  const [error, setError] = useState();

  const { user } = useAuth();

  const onChange = (event) => {
    setComment((oldValue) => ({
      ...oldValue,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    createComment(comment, comicId)
      .then((comment) => {
        console.log('comment: ', comment)
        onCreate(comment);
      })
      .catch((event) => {
        console.log('event: ', event)
        setError(event?.response?.data?.message)
      });
  };

  if (!user) {
    return <p>No image</p>;
  }

  return (
    <div className="CommentForm">
      <img src={user.image} alt="" />
      <div className="CommentForm__form">
        <form onSubmit={onFormSubmit}>
          {error && <p>There was an error: {error}</p>}

          <textarea
            name="description"
            id="description"
            value={comment.description}
            onChange={onChange}
            placeholder="Join the discussion"
          />

          <button type="submit">Comment</button>
        </form>
      </div>
    </div>
  );
}
