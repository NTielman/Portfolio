import React from 'react';
import desIcon from '../images/about-images/des_icon.png';

const DesignAbout = () => {

    return (
        <div className='des-about-container'>
            <h1>About Me</h1>
            <div className='about-content'>
                <article className='about-text'>
                    <h3>Part Unicorn</h3>
                    <p>lorem ipsum</p>
                </article>
                <figure className='about-image'>
                    <img className='about-avatar-image des' src={desIcon} alt='Avatar of Nneka' />
                    <figcaption className='about-caption'>Accurate depiction of Nika when in the vicinity of sushi</figcaption>
                </figure>
            </div>
        </div >
    );
}

export default DesignAbout;