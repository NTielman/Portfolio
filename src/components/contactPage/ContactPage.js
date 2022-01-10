import React from 'react';
import { useSelector } from 'react-redux';
import DevButton from '../button/DevButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    const contactOptions = [
        {
            contactMethod: "linkedin",
            url: "https://www.linkedin.com/in/nneka-tielman/",
            iconName: faLinkedin,
            showOn: "both"
        },
        {
            contactMethod: "github",
            url: "https://github.com/NTielman",
            iconName: faGithubSquare,
            showOn: "dev"
        },
        {
            contactMethod: "instagram",
            url: "https://www.instagram.com/unsuprvsd/?hl=en",
            iconName: faInstagram,
            showOn: "des"
        },
        {
            contactMethod: "gmail",
            url: "mailto:khalienne@gmail.com",
            iconName: faEnvelopeSquare,
            showOn: "both"
        },
    ];
    const devMode = useSelector(state => state.devMode);

    return (
        <section className={`contact page ${devMode ? 'dev' : 'des'}`} id='contact'>
            <div className='social-text-container'>
                <h2>Contact Me</h2>
                <h3>Don't be a stranger!</h3>

                <p>If you have any questions or just want to say hi,<br /> shoot me an email. <br /> I'd love to hear from you!</p>
            </div>

            <div className='social-links-container'>
                {contactOptions.map(contactOption => {
                    if (devMode & (contactOption.showOn === 'both' || contactOption.showOn === 'dev')) {
                        return (
                            <DevButton
                                key={contactOption.contactMethod}
                                className={`social-item ${contactOption.contactMethod}`}
                                title={contactOption.contactMethod}
                            >
                                <a
                                    className="social-item-link"
                                    href={contactOption.url}
                                    target='_blank'
                                    rel="noreferrer noopener"
                                    title={contactOption.contactMethod}>
                                    <FontAwesomeIcon icon={contactOption.iconName} className="social-icon" />
                                </a>
                            </DevButton>)
                    }

                    if (!devMode & (contactOption.showOn === 'both' || contactOption.showOn === 'des')) {
                        return (
                            <a
                                className={`social-item ${contactOption.contactMethod}`}
                                href={contactOption.url}
                                target='_blank'
                                rel="noreferrer noopener"
                                title={contactOption.contactMethod}
                                key={contactOption.contactMethod}>
                                <FontAwesomeIcon icon={contactOption.iconName} className="social-icon" />
                            </a>
                        )
                    }
                    return null;
                })}
            </div>
        </section >
    );
}

export default Contact;