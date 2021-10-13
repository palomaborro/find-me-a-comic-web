import React, { useState, useEffect } from "react";
import ComicCard from "../comicCard/ComicCard";
import { getComics, searchComics } from "../../services/ComicService";
import "./ComicList.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import SearchBar from "../searchBar/SearchBar";

export default function ComicList() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // const [page, setPage] = useState(0);

  useEffect(() => {
    getComics().then((res) => {
      setComics(res.results);
      setLoading(false)
    })
    .catch(() => {
      setError(true)
    });
  }, []);

  const onSearch = (search) => {
    searchComics(search).then((res) => {
      setComics(res.results);
      setLoading(false)
    })
    .catch(() => {
      setError(true)
    });
  }

  const style = { position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)" };

  if (error) {
    return(
    <div className='ComicList__error'>
      <h1 >Sorry, there was an error</h1>
      <img src="https://c.tenor.com/-Qs0HrNLF0AAAAAC/wait-what-spider-man.gif" alt="" />
    </div>
    )
  }

  return (
    <div className="ComicList">
        {loading ? (
            <Loader style={style} type="TailSpin" color="#000000" secondaryColor='Grey' height={80} width={80}  />
        ) : (
        <>
            <h1>Comic Data Base</h1>
            <SearchBar onSubmit={onSearch} />
            <div className="ComicList__container">
                {comics.map((comic) => (
                <ComicCard key={comic.id} {...comic} />
                ))}
            </div>
        </>
        )}
    </div>
  );
}
