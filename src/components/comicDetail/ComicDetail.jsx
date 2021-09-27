import React from 'react';
import { useParams } from 'react-router-dom';

export default function ComicDetail() {
    const {comicId} = useParams

    return (
        <div>
            Detalle
        </div>
    );
};