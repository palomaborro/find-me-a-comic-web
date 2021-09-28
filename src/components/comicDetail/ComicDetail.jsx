import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getComics } from '../services/ComicService';
import './ComicDetail.css'


export default function ComicDetail() {
    const {comicId} = useParams();
    const [comic, setComic] = useState();

    useEffect(() => {
        getComics(comicId)
          .then(res => {
              setComic(res.results)
          console.log(res.results)
      })
     }, [comicId]);

    return (
        <div className='ComicDetail'>
            {/* <img src={comic.image.original_url} alt="" />
            <div className='ComicDetail__info'>
                <h2>{comic.name} #{comic.issue_number}</h2>
                <p>Published: {comic.cover_date}</p>
                <p>{comic.description}</p>
            </div> */}
        </div>
    );
};