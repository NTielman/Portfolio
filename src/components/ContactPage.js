import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {

    const getMode = useSelector(state => state.devMode);

    return (
        <div className={getMode ? 'contact page dev' : 'contact page des'} id='contact'>
            <h1>Get In Touch</h1>
            <div className='social-links'>
                <a className='social-item linkedin' href='https://www.linkedin.com/in/nneka-tielman/' target='_blank' rel="noreferrer noopener">
                    <i className="fab fa-linkedin"></i>
                    <p>linkedin.com/in/nneka-tielman/</p>
                </a>

                <a className={getMode ? 'social-item github' : 'hide'} href='https://github.com/NTielman' target='_blank' rel="noreferrer noopener">
                    <i className="fab fa-github-square"></i>
                    <p>github.com/NTielman</p>
                </a>

                <a className={getMode ? 'hide' : 'social-item instagram'} href='https://www.instagram.com/unsuprvsd/?hl=en' target='_blank' rel="noreferrer noopener">
                    <i className="fab fa-instagram"></i>
                    <p>@unsuprvsd</p>
                </a>

                <div className="social-item whatsapp">
                    <i className="fab fa-whatsapp-square"></i>
                    <p>+31 619 168 997</p>
                    <p>+0 619 168 997</p>
                </div>


                <a href='mailto:khalienne@gmail.com' className='social-item gmail'>
                    <i className="fas fa-envelope-square"></i>
                    <p>khalienne@gmail.com</p>
                </a>

                <div className='social-item address'>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Van der Hoopstraat 57</p>
                    <p>2523 HE, The Hague</p>
                    <p>Netherlands</p>
                </div>
            </div>
        </div >
    );
}

export default Contact;