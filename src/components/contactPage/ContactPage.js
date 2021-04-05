import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {

    const devMode = useSelector(state => state.devMode);

    return (
        <section className={devMode ? 'contact page dev' : 'contact page des'} id='contact'>
            <div className='social-text-container'>
                <h1>Contact Me</h1>
                <h3>Don't be a stranger!</h3>

                <p>If you have any questions or just want to say hi,<br /> shoot me an email. <br /> I'd love to hear from you!</p>
            </div>

            <div className='social-links-container'>
                <a className='social-item linkedin' href='https://www.linkedin.com/in/nneka-tielman/' target='_blank' rel="noreferrer noopener" onMouseOver={() => { console.log('link getting hovered') }}>
                    <i onMouseOver={() => { console.log('icon getting hovered') }} className="fab fa-linkedin social-icon"></i>
                </a>

                <a className={devMode ? 'social-item github' : 'hide'} href='https://github.com/NTielman' target='_blank' rel="noreferrer noopener">
                    <i className="fab fa-github-square social-icon"></i>
                </a>

                <a className={devMode ? 'hide' : 'social-item instagram'} href='https://www.instagram.com/unsuprvsd/?hl=en' target='_blank' rel="noreferrer noopener">
                    <i className="fab fa-instagram social-icon"></i>
                </a>

                <a href='https://wa.me/31619168997' target='_blank' rel="noreferrer noopener" className="social-item whatsapp">
                    <i className="fab fa-whatsapp-square social-icon"></i>
                </a>

                <a href='mailto:khalienne@gmail.com' className='social-item gmail'>
                    <i className="fas fa-envelope-square social-icon"></i>
                </a>
            </div>
        </section >
    );
}

export default Contact;