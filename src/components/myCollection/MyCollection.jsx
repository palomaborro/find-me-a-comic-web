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

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      getComics()
        .then((res) => {
          setComics(res.results);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      getLists()
        .then((res) => {
          setLists(res);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [user]);

  const onListCreate = (list) => {
    setLists((old) => [...old, list]);
  };

  const updateList = (listId) => {
    setLists((old) => [...old.filter(list => list.id !== listId)]);
  };

  return (
    <div className="MyCollection">
      {user && (
        <>
          <img src={user.image} alt="" />
          <span>{user.name}</span>
          <h2>Your lists</h2>
          {lists.map((list) => (
            <List key={list.id} {...list} id={list.id} updateList={updateList}/>
          ))}
          <h2>Create a list</h2>
          <ListForm onCreate={onListCreate} />
        </>
      )}
    </div>
  );
}
