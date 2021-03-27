import React from 'react';
import devIcon from '../images/about-images/dev_icon.png';

const DevAbout = () => {

    return (
        <div className='about-container'>
            <figure className='about-image'>
                <img className='about-avatar-image dev' src={devIcon} alt='Avatar of Nneka' />
                <figcaption className='about-caption'>Depiction of "Nika Sanchez" cooking up a masterplan</figcaption>
            </figure>
            <article className='about-text'>
                <h1>Part Mastermind</h1>
                <p>lorem ipsum</p>
            </article>
        </div>
    );
}

export default DevAbout;