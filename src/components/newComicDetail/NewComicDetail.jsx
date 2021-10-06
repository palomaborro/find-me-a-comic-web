import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getNewComic } from "../../services/ComicService";
import Loader from "react-loader-spinner";
import "./NewComicDetail.css";
import Comment from "../comment/Comment";
import CommentForm from "../commentForm/CommentForm";

export default function ComicDetail() {
  const { id } = useParams();
  const [comic, setComic] = useState();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (error) {
    return (
      <div className="newComicsList__error">
        <h1>Sorry, there was an error</h1>
        <img
          src="https://c.tenor.com/-Qs0HrNLF0AAAAAC/wait-what-spider-man.gif"
          alt=""
        />
      </div>
    );
  }

  const onCommentCreate = (comment) => {
    setComments((old) => ([...old, comment]));
  };

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
            <form>
              <label>Add to list</label>
              <select></select>
            </form>
            <Link className='NewComicDetail__Link' to='/mycollection'>Create a list</Link>
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
      <div className="NewComicDetail__comment">
        <h2>Comments:</h2>
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
        <CommentForm comicId={id} onCreate={onCommentCreate} />
      </div>
    </div>
  );
}
