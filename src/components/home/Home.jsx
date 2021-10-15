import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import findIcon from '../../assets/home/ojos.png';
import shareIcon from '../../assets/home/comparte.png';
import organizeIcon from '../../assets/home/coleccion.png';


export default function Home() {
    return (
        <div className='Home'>
            <div className='Home__container'>
                <div className='Home__container__header'>
                    <h1>Find, recommend and organize your comic collection in just one place</h1>
                    <div className='Home__container__header__button'><Link to={'/login'}><span>JOIN</span></Link></div>
                </div>
                <div className='Home__container__info'>
                    <ul>
                        <li>
                        <img src={findIcon} alt='' />
                            <p>Find all the new <span>releases</span></p>
                        </li>
                        <li>
                        <img src={shareIcon} alt='' />
                            <p>Share and rate your <span>favorite</span> comics</p>
                        </li>
                        <li>
                        <img src={organizeIcon} alt='' />
                            <p>We organize your <span>collection</span> for you</p>
                        </li>
                    </ul>
                </div>
                </div>
        </div>
    );
};