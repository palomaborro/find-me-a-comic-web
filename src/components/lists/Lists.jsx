import React, { useState, useEffect } from "react";
import { getLists } from "../../services/ComicService";
import List from "../list/List";
import './Lists.css'

export default function Lists() {
    const [lists, setLists] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getLists()
          .then((lists) => {
            setLists(lists);
          })
          .catch(() => {
            setError(true);
          });
      }, []);

      if (error) {
        return(
        <div className='ComicList__error'>
          <h1 >Sorry, there was an error</h1>
          <img src="https://c.tenor.com/-Qs0HrNLF0AAAAAC/wait-what-spider-man.gif" alt="" />
        </div>
        )
      }

    return (
        <div className='Lists'>
            <h1>Popular lists</h1>
            {lists.map((list) => (
          <List key={list.id} {...list} />
        ))}
        </div>
    )
}