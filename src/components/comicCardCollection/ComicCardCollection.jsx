import { Link } from "react-router-dom";
import "./ComicCardCollection.css";

export default function ComicCardCollection({ volume, image, issue_number, id }) {
  return (
    <div className="ComicCardCollection">
      <Link to={`/comics/${id}`}>
        <img className="ComicCardCollection__image" src={image?.original_url} alt="" />
      </Link>
    </div>
  );
}