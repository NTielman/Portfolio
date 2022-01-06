import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import devBio from '../../utils/devBio';
import designBio from '../../utils/desBio';

const About = () => {

    const devMode = useSelector(state => state.devMode);
    const [bio, setBio] = useState({
        description: '',
        tools: [],
        image: '',
        webpImage: '',
        caption: ''
    });

    useEffect(() => {
        if (devMode) {
            setBio(devBio);
        } else {
            setBio(designBio);
        }
    }, [devMode]);

    const { description, tools, image, webpImage, caption } = bio;

    return (
        <section className={`about page ${devMode ? 'dev' : 'des'}`} id='about'>

            <h2>About Me</h2>

            <div className='about-content'>
                <figure className='about-image-container'>
                    <picture>
                        <source type="image/webp" srcSet={process.env.PUBLIC_URL + webpImage} />
                        <source type="image/png" srcSet={process.env.PUBLIC_URL + image} />
                        <img loading="lazy" className='avatar' src={process.env.PUBLIC_URL + image} alt='Avatar of Nneka' width="300" height="300" />
                    </picture>
                    <figcaption className='about-caption'>{caption}</figcaption>
                </figure>

                <article className='about-text-container'>
                    <p className='about-text'>
                        {description}
                    </p>
                    <ul className='about-tools'>
                        {tools.map(tool => <li key={tool} className='label'>{tool}</li>)}
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default About;