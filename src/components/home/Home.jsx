import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
        <div className='Home'>
            <div className='Home__container'>
                <div className='Home__container__header'>
                    <h1>Find, recommend and organize your comic collection in just one place</h1>
                    <div className='Home__container__header__button'><Link to={'/login'}><span>JOIN</span></Link></div>
                </div>
                <div>
                    <ul>
                        <li>
                            <p>Dont miss anything!</p><br />Find all the new releases
                        </li>
                        <li>
                            <p>Be a part of the community!</p><br />Share and rate your favorite comics
                        </li>
                        <li>
                            <p>Control everything!</p><br />We organize your collection for you
                        </li>
                    </ul>
                </div>
                </div>
        </div>
    );
};