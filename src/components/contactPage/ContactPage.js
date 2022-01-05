import React from 'react';
import { useSelector } from 'react-redux';
import DevButton from '../button/DevButton';

const Contact = () => {

    const contactOptions = [
        {
            contactMethod: "linkedin",
            url: "https://www.linkedin.com/in/nneka-tielman/",
            class: "fab fa-linkedin",
            showOnDes: true,
            showOnDev: true
        },
        {
            contactMethod: "github",
            url: "https://github.com/NTielman",
            class: "fab fa-github-square",
            showOnDes: false,
            showOnDev: true
        },
        {
            contactMethod: "instagram",
            url: "https://www.instagram.com/unsuprvsd/?hl=en",
            class: "fab fa-instagram",
            showOnDes: true,
            showOnDev: false
        },
        {
            contactMethod: "gmail",
            url: "mailto:khalienne@gmail.com",
            class: "fas fa-envelope-square",
            showOnDes: true,
            showOnDev: true
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
                    if (devMode & contactOption.showOnDev) {
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
                                    <i className={`${contactOption.class} social-icon`}></i>
                                </a>
                            </DevButton>)
                    }

                    if (!devMode & contactOption.showOnDes) {
                        return (
                            <a
                                className={`social-item ${contactOption.contactMethod}`}
                                href={contactOption.url}
                                target='_blank'
                                rel="noreferrer noopener"
                                title={contactOption.contactMethod}
                                key={contactOption.contactMethod}>
                                <i className={`${contactOption.class} social-icon`}></i>
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