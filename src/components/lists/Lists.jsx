import React, { useState, useEffect } from "react";
import { getLists } from "../../services/ComicService";
import ListCollection from "../listCollection/ListCollection";
import Loader from "react-loader-spinner";
import "./Lists.css";

export default function Lists() {
  const [lists, setLists] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLists()
      .then((lists) => {
        setLists(lists);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (error) {
    return (
      <div className="ComicList__error">
        <h1>Sorry, there was an error</h1>
        <img
          src="https://c.tenor.com/-Qs0HrNLF0AAAAAC/wait-what-spider-man.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="Lists">
      {loading ? (
        <Loader
          style={style}
          type="TailSpin"
          color="#000000"
          secondaryColor="Grey"
          height={80}
          width={80}
        />
      ) : (
        <>
          <h1>Popular lists</h1>
          <div className="Lists__list">
            {lists.map((list) => (
              <ListCollection key={list.id} {...list} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
