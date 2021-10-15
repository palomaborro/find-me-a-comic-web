import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { deleteList, getComic } from "../../services/ComicService";
import ComicCardCollection from "../comicCardCollection/ComicCardCollection";
import "./List.css";

export default function List({ title, description, comics, author, id, updateList }) {
  const [comicsResult, setComicsResult] = useState([]);
  
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
    const comicPromises = comics.map((comic) => getComic(comic));
      Promise.all(comicPromises)
      .then(data => {
        setComicsResult(data);
      })
    }
  }, [user]);

  const onListDelete = (id) => {
    deleteList(id)
    .then(res => {
      if (res.deleted) {
        updateList(id)
      }
    })
  }
  
  return (
    <div className="List">
    {user && (
      <>
      <h3>{title}</h3>
      <h5>{user.name}</h5>
      <p>{description}</p>
      <div className='List__Comics'>
        {comicsResult.map((comic) => (
          <ComicCardCollection key={comic.results.id} {...comic.results} />
        ))}
      </div>
      <button onClick={() => onListDelete(id)}>Delete list</button>
      </>
      )}
    </div>
  );
}
