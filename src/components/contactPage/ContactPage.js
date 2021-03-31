import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {

    const getMode = useSelector(state => state.devMode);

    return (
        <div className={getMode ? 'contact page dev' : 'contact page des'} id='contact'>
            <h1>Contact Me</h1>
            <h3>Don't be a stranger!</h3>

            <p>If you have any questions or just want to say hi,<br /> shoot me an email. <br /> I'd love to hear from you!</p>

            <div className='social-links-container'>
                <a className='social-item linkedin' href='https://www.linkedin.com/in/nneka-tielman/' target='_blank' rel="noreferrer noopener">
                    <i className="fab fa-linkedin social-icon"></i>
                    <p>linkedin.com/in/nneka-tielman/</p>
                </a>

                <a className={getMode ? 'social-item github' : 'hide'} href='https://github.com/NTielman' target='_blank' rel="noreferrer noopener">
                    <i className="fab fa-github-square social-icon"></i>
                    <p>github.com/NTielman</p>
                </a>

                <a className={getMode ? 'hide' : 'social-item instagram'} href='https://www.instagram.com/unsuprvsd/?hl=en' target='_blank' rel="noreferrer noopener">
                    <i className="fab fa-instagram social-icon"></i>
                    <p>@unsuprvsd</p>
                </a>

                <span className="social-item whatsapp">
                    <i className="fab fa-whatsapp-square social-icon"></i>
                    <p>+31 619 168 997</p>
                    <p>+0 619 168 997</p>
                </span>


                <a href='mailto:khalienne@gmail.com' className='social-item gmail'>
                    <i className="fas fa-envelope-square social-icon"></i>
                    <p>khalienne@gmail.com</p>
                </a>

                <span className='social-item address'>
                    <i className="fas fa-map-marker-alt social-icon"></i>
                    <p>Van der Hoopstraat 57
                        <br />2523 HE, The Hague
                        <br /> Netherlands
                    </p>
                </span>
            </div>
        </div >
    );
}

export default Contact;