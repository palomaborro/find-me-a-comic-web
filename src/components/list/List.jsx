import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { deleteList, getComic } from "../../services/ComicService";
import ComicCard from "../comicCard/ComicCard";
import "./List.css";

export default function List({ title, description, author, comics, id, updateList }) {

  const { user } = useAuth();
  const [comicsResult, setComicsResult] = useState([]);

  useEffect(() => {
    if (user && comics) {
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
      <h3>{title}</h3>
      <h4>{author.name}</h4>
      <p>{description}</p>
      {comicsResult.map((comic) => (
        <ComicCard key={comic.id} {...comic.results} />
      ))}
      <button onClick={() => onListDelete(id)}>Delete list</button>
    </div>
  );
}
