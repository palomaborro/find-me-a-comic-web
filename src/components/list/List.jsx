import { useEffect, useState } from "react";
import { getComic } from "../../services/ComicService";
import "./List.css";

export default function List({ title, description, author, comics }) {
    const [list, setlist] = useState();

    // useEffect(() => {
    //     Promise.all([
           
    //       ])
    // })


    return (
        <div className='List'>
            <h3>{title}</h3>
            <h4>{author.name}</h4>
            <p>{description}</p>
        </div>
    )
}