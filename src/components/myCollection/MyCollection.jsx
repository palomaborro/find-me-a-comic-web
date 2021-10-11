import { useAuth } from "../../hooks/useAuth";
import "./MyCollection.css";
import ListForm from "../listForm/ListForm";
import List from "../list/List";
import { useState, useEffect } from "react";
import { getLists } from "../../services/ComicService";
import { getComics } from "../../services/ComicService";


export default function MyCollection() {
  const [lists, setLists] = useState([]);
  const [comics, setComics] = useState([]);
  const [error, setError] = useState(false);
  const [fav, setFav] = useState([])
  

  const { user } = useAuth();

  useEffect(() => {
    getComics().then((res) => {
      setComics(res.results);
    })
    .catch(() => {
      setError(true)
    });
  }, []);

  useEffect(() => {
    getLists()
      .then((res) => {
        setLists(res);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const onListCreate = (list) => {
    setLists((old) => [...old, list]);
  };

  const onFavCreate = (fav) => {
    setFav((fav));
  }


  return (
    <div className="MyCollection">
      <img src={user.image} alt="" />
      <span>{user.name}</span>
      <h2>Your lists</h2>
      {lists.map((list) => (
        <List key={list.id} {...list} />
      ))}
      <h2>Create a list</h2>
      <ListForm onCreate={onListCreate} />
      <div>
      </div>
    </div>
  );
}
