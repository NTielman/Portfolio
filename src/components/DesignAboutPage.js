import React from 'react';
import desIcon from '../images/about-images/des_icon.png';

const DesignAbout = () => {

    return (
        <div className='about-container'>
            <article className='about-text'>
                <h1>Part Unicorn</h1>
                <p>lorem ipsum</p>
            </article>
            <figure className='about-image'>
                <img className='about-avatar-image des' src={desIcon} alt='Avatar of Nneka' />
                <figcaption className='about-caption'>Accurate depiction of Nika when in the vicinity of sushi</figcaption>
            </figure>
        </div>
    );
}

export default DesignAbout;