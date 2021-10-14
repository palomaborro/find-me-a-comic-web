import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { getComic } from "../../services/ComicService";
import ComicCardCollection from "../comicCardCollection/ComicCardCollection";
import "./ListCollection.css";

export default function ListCollection({ title, description, author, comics, lists }) {

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

  return (
    <div className="ListCollection">
    {user && (
      <>
      <h3>{title}</h3>
      <h5>{author.name}</h5>
      <p>{description}</p>
      <div className='ListCollection__Comics'>
      {comicsResult.map((comic) => (
        <ComicCardCollection key={comic.id} {...comic.results} />
      ))}
      </div>
      </>
      )}
    </div>
  );
}
