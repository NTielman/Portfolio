import React, { useRef } from 'react';
import AboutText from './AboutText';
import { useSelector } from 'react-redux';

const DesignAbout = () => {

    const devMode = useSelector(state => state.devMode);
    const arrowRef = useRef();

    return (
        <div className={devMode ? 'hide' : 'about-container des'}>
            <h1>About Me</h1>
            <div className='about-content'>
                <article className='about-text' onScroll={() => {
                    arrowRef.current.style.animation = "fadeOut 1s ease forwards";
                }}>
                    <h3>Part Designer</h3>
                    <i ref={arrowRef} className="fas fa-arrow-down helper-arrow"></i>
                    <AboutText />
                </article>
                <figure className='about-image-container'>
                    <img className='avatar des' src={process.env.PUBLIC_URL + '/assets/images/about/designAvatar.png'} alt='Avatar of Nneka' />
                    <figcaption className='about-caption'>Depiction of Nika when in the vicinity of sushi. <small>(you have been warned)</small></figcaption>
                </figure>
            </div>
        </div >
    );
}

export default DesignAbout;