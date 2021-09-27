import React, {useState, useEffect} from 'react';
import { getComics } from '../services/ComicService';

export default function ComicList () {
    const [comics, setComics] = useState(null)

    useEffect(() => {
        getComics()
        .then(res => setComics(res))
    }, [])

    console.log(comics)

    return (
        <div>
            
        </div>
    );
};