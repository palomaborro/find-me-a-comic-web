import { useState } from "react";
import { createList } from "../../services/ComicService";
import "./ListForm.css";
import { useAuth } from "../../hooks/useAuth";

export default function ListForm({ onCreate }) {
  const [list, setList] = useState({ title: "", description: "", comics: [] });
  const [error, setError] = useState();

  const { user } = useAuth();

  const onListSubmit = (event) => {
    event.preventDefault();

    createList(list)
      .then((list) => {
        onCreate(list);
      })
      .catch((event) => {
        console.log(event);
        setError(event?.response?.data?.message);
      });
  };

  const onChange = (event) => {
    setList((oldValue) => ({
      ...oldValue,
      [event.target.name]: event.target.value,
    }));
  };

  if (!user) {
    return <p>No lists, sorry</p>;
  }

  return (
    <div className="ListForm">
      <form onSubmit={onListSubmit}>
        {error && <p>There was an error: {error}</p>}
        <label>Title:</label>
        <input
          className="ListForm__title"
          placeholder="Best of..."
          name="title"
          id="title"
          value={list.title}
          onChange={onChange}
        />

        <label>Description:</label>
        <textarea
          className="ListForm__description"
          name="description"
          id="description"
          onChange={onChange}
          value={list.description}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}
