import React, {useState, useEffect} from 'react';
import ComicCard from '../comicCard/ComicCard';
import { getComics } from '../services/ComicService';
import './ComicList.css'

export default function ComicList() {
    const [comics, setComics] = useState([]);
    // const [page, setPage] = useState(0);


    useEffect(() => {
        getComics()
        .then(res => {
            setComics(res.results)
        })
    }, [])

    

    return (
        <div className='ComicList'>
            <h1>New Releases</h1>
                <div className='ComicList__container'>
                {comics.map((comic) => (
                <ComicCard key={comic.id} {...comic} />
                ))}
                </div>
        </div>
    )
}