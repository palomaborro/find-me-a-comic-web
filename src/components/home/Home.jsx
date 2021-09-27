import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
        <div className='Home'>
            <div className='Home__container'>
                <div className='Home__container__header'>
                    <h1>Find, recommend and organize your comic collection in just one place</h1>
                    <div><Link to={'/'}><span>JOIN</span></Link></div>
                </div>
                <div className='Home__container__description'>
                    <ul>
                        <li>
                            Dont miss anything! <p>Find the new releases</p>
                        </li>
                        <li>
                            Be a part of the community! <p>Recommend, share and rate your favorite comics</p>
                        </li>
                        <li>
                            Control everything! <p>We organize your collection for you</p>
                        </li>
                    </ul>
                </div>
                </div>
        </div>
    );
};