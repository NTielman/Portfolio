import React from 'react';
import devIcon from '../images/about-images/dev_icon.png';

const DevAbout = () => {

    return (
        <div className='dev-about-container'>
            <h1>About Me</h1>
            <div className='about-content'>
                <figure className='about-image'>
                    <img className='about-avatar-image dev' src={devIcon} alt='Avatar of Nneka' />
                    <figcaption className='about-caption'>Depiction of "Nika Sanchez" cooking up a masterplan</figcaption>
                </figure>
                <article className='about-text'>
                    <h3>Part Mastermind</h3>
                    <p>lorem ipsum</p>
                </article>
            </div>
        </div>
    );
}

export default DevAbout;