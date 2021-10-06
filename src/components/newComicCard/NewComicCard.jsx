import { Link } from "react-router-dom";
import "./NewComicCard.css";

export default function NewComicCard({ volume, image, issue_number, id }) {
  return (
    <div className="NewComicCard">
      <Link to={`/new/${id}`}>
        <img className="NewComicCard__image" src={image.original_url} alt="" />
        <div className="NewComicCard__info">
          <p className='NewComicCard__info__name'>{volume.name} #{issue_number}</p>
        </div>
      </Link>
    </div>
  );
}