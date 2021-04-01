import React, { useRef } from 'react';
import AboutText from './AboutText';
import { useSelector } from 'react-redux';

const DevAbout = () => {

    const devMode = useSelector(state => state.devMode);
    const arrowRef = useRef();

    return (
        <div className={devMode ? 'about-container dev' : 'hide'}>
            <h1>About Me</h1>
            <div className='about-content'>
                <figure className='about-image-container'>
                    <img className='avatar dev' src={process.env.PUBLIC_URL + '/assets/images/about/devAvatar.png'} alt='Avatar of Nneka' />
                    <figcaption className='about-caption'>Depiction of Nika "C-137" cooking up a master plan</figcaption>
                </figure>
                <article className='about-text' onScroll={() => {
                    arrowRef.current.style.animation = "fadeOut 1s ease forwards";
                }}>
                    <h3>Part Developer</h3>
                    <i ref={arrowRef} className="fas fa-arrow-down helper-arrow"></i>
                    <AboutText />
                </article>
            </div>
        </div>
    );
}

export default DevAbout;