import React from 'react';
import { useSelector } from 'react-redux';

const DevAbout = () => {

    const devMode = useSelector(state => state.devMode);

    return (
        <div className={devMode ? 'about-container dev' : 'hide'}>
            <h1>About Me</h1>
            <div className='about-content'>
                <figure className='about-image-container'>
                    <img className='avatar dev' src={process.env.PUBLIC_URL + '/assets/images/about/devAvatar.png'} alt='Avatar of Nneka' />
                    <figcaption className='about-caption'>Depiction of Nika "C-137" cooking up a master plan</figcaption>
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