import React from 'react';
import { useSelector } from 'react-redux';

const DesignAbout = () => {

    const devMode = useSelector(state => state.devMode);

    return (
        <div className={devMode ? 'hide' : 'about-container des'}>
            <h1>About Me</h1>
            <div className='about-content'>
                <article className='about-text'>
                    <h3>Part Unicorn</h3>
                    <p>lorem ipsum</p>
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