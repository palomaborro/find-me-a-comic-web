import { Link } from "react-router-dom";
import "./ComicCard.css";

export default function ComicCard({ volume, image, issue_number, id }) {
  return (
    <div className="ComicCard">
      <Link to={`/new/${id}`}>
        <img className="ComicCard__image" src={image.original_url} alt="" />
        <div className="ComicCard__info">
          <p className='ComicCard__info__name'>{volume.name} #{issue_number}</p>
        </div>
      </Link>
    </div>
  );
}