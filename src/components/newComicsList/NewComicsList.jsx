import React, { useState, useEffect } from "react";
import NewComicCard from "../newComicCard/NewComicCard";
import { getNewComics, searchNewComics } from "../../services/ComicService";
import "./NewComicsList.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import SearchBar from "../searchBar/SearchBar";

export default function NewComicsList() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // const [page, setPage] = useState(0);

  useEffect(() => {
    getNewComics().then((res) => {
      setComics(res.results);
      setLoading(false)
    })
    .catch(() => {
      setError(true)
    });
  }, []);

  const onSearch = (search) => {
    searchNewComics(search).then((res) => {
      setComics(res.results);
      setLoading(false)
    })
    .catch(() => {
      setError(true)
    });
  }

  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  if (error) {
    return(
    <div className='newComicsList__error'>
      <h1 >Sorry, there was an error with the API</h1>
      <img src="https://c.tenor.com/-Qs0HrNLF0AAAAAC/wait-what-spider-man.gif" alt="" />
    </div>
    )
  }

  return (
    <div className="newComicsList">
        {loading ? (
            <Loader style={style} type="TailSpin" color="#000000" secondaryColor='Grey' height={80} width={80}  />
        ) : (
        <>
            <h1>New Releases</h1>
            <SearchBar onSubmit={onSearch} />
            <div className="newComicsList__container">
                {comics.map((comic) => (
                <NewComicCard key={comic.id} {...comic} />
                ))}
            </div>
        </>
        )}
    </div>
  );
}
