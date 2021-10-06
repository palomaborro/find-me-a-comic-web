import { useState } from "react";
import './ListForm.css'

export default function ListForm() {
    const [list, setList] = useState({ title: "", description: "" });
    const [error, setError] = useState();

    const onListSubmit = (event) => {
        event.preventDefault();

        createList(list, comicId)
        .then((list) => {
            onCreate(list);
          })
          .catch((event) => setError(event.response.data.message));
    }

    const onChange = (event) => {
        setList((oldValue) => ({
          ...oldValue,
          [event.target.name]: event.target.value,
        }));
      };

    return (
        <div className='ListForm'>
            <form onSubmit={onListSubmit}>
            {error && <p>There was an error: {error}</p>}
                <label>Title:</label>
                <input
                placeholder='Best of...'
                name="title"
                id="title"
                value={list.title}
                onChange={onChange}
                />

                <label>Description:</label>
                <textarea
                name="description"
                id="description"
                onChange={onChange}
                value={list.description}
                />

            <button type="submit">Create</button>
            </form>
        </div>
    )
}