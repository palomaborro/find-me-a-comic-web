import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { addComicToList, getNewComic } from "../../services/ComicService";
import Loader from "react-loader-spinner";
import "./NewComicDetail.css";
import Comment from "../comment/Comment";
import CommentForm from "../commentForm/CommentForm";
import { getLists } from "../../services/ComicService";
import { useAuth } from "../../hooks/useAuth";

export default function ComicDetail() {
  const [comic, setComic] = useState();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lists, setLists] = useState();
  const [select, setSelect] = useState("Select a list");
  const [error, setError] = useState(false);

  const { id } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    getLists()
      .then((res) => {
        setLists(res);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  useEffect(() => {
    getNewComic(id)
      .then((res) => {
        setComic(res.results);
        setComments(res.comments);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [id]);

  const onCommentCreate = (comment) => {
    setComments((old) => [...old, comment]);
  };

  const handleListChange = (event) => {
    setSelect(event.target.value);
  };

  const saveComic = () => {
    console.log('select', select)
    console.log('id', id)
    console.log('user', user)
    addComicToList(select, id, user)
    .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (error) {
    return (
      <div className="newComicsList__error">
        <h1>Sorry, you must register</h1>
      </div>
    );
  }

  return (
    <div className="NewComicDetail">
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
        <div className="NewComicDetail__body">
          <div className="NewComicDetail__body__image">
            <img src={comic.image.original_url} alt="" />
            <div className="NewComicDetail__body__form">
              <label>Add to list:</label>
              {lists && lists.length > 0 && (
                <>
                  <select className="NewComicDetail__body__form__select" onChange={handleListChange}>
                    <option value="Select a list">Select a list</option>
                    {lists.map((list) => (
                      <option key={list.id} value={list.id}>
                        {list.title}
                      </option>
                    ))}
                  </select>
                  <button onClick={saveComic}>Add</button>
                </>
              )}
            </div>
            <Link className="NewComicDetail__Link" to="/mycollection">
              Create a list
            </Link>
          </div>
          <div className="NewComicDetail__body__info">
            {comic.name && comic.issue_number ? (
              <h2>
                {comic.name} #{comic.issue_number}
              </h2>
            ) : (
              <p>Name not available</p>
            )}
            {comic.cover_date ? (
              <p>
                <b>Published:</b> {comic.cover_date}
              </p>
            ) : (
              <p>Release date not available</p>
            )}
            {comic.description ? (
              <div
                className="NewComicDetail__body__info__description"
                dangerouslySetInnerHTML={{ __html: comic.description }}
              ></div>
            ) : (
              <p>Description not available</p>
            )}
            {comic.person_credits.name ? (
              comic.person_credits.name.map((person) => (
                <p key={person.id}>
                  {comic.person_credits.name}, {comic.person_credits.role}
                </p>
              ))
            ) : (
              <p></p>
            )}
          </div>
        </div>
      )}
      {!loading && (
        <div className="NewComicDetail__comment">
          <h2>Comments</h2>
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
          <CommentForm comicId={id} onCreate={onCommentCreate} />
        </div>
      )}
    </div>
  );
}
