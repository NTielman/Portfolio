import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import { Timeline } from 'gsap/gsap-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faPen, faFile, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    const navRef = useRef();
    const tl = useRef();
    const devMode = useSelector(state => state.devMode);
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    // open nav animation
    useEffect(() => {
        const q = gsap.utils.selector(navRef);
        tl.current = new Timeline({ paused: true })
            .to(q(".btn:not(:first-child)"), { opacity: 1, duration: 0 })
            .to(q(".btn:not(:first-child)"), { y: (index) => `${(index + 1) * 4.5}rem`, stagger: { amount: 0.5 }, ease: "elastic.easeOut", duration: 0 });
    }, [])

    const toggleNav = (event) => {
        const navIsOpen = event.currentTarget.checked;
        navIsOpen ? tl.current.play() : tl.current.reverse();
        !navIsOpen ? setMenuIsOpen(navIsOpen) : (setTimeout(() => {
            setMenuIsOpen(navIsOpen);
        }, 1000));
    }

    return (
        <nav className={`menu ${menuIsOpen ? 'open' : ''}`} ref={navRef}>
            <input type='checkbox' id='menu-checkbox' className='hide' onChange={toggleNav} />
            <label htmlFor='menu-checkbox' className={`toggle-menu ${devMode ? 'dev' : 'des'}`}>
                <div className='btn' role="button" title="menu">
                    <FontAwesomeIcon icon={faBars} className="menu-icon" />
                    <FontAwesomeIcon icon={faTimes} className="close-icon" />
                </div>

                <div className='btn home-btn' role="button" title="home"
                    onClick={() => { window.location.href = '#home' }}
                    data-tooltip='Home'>
                    <FontAwesomeIcon icon={faHome} />
                </div>
                <div className='btn about-btn' role="button" title="about"
                    onClick={() => { window.location.href = '#about' }}
                    data-tooltip='About'>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className='btn projects-btn' role="button" title="projects"
                    onClick={() => { window.location.href = '#projects' }}
                    data-tooltip='Projects'>
                    <FontAwesomeIcon icon={faPen} />
                </div>
                <div className='btn resume-btn' title="download resume"
                    onClick={() => {
                        const tempLink = document.createElement('a');
                        tempLink.setAttribute('href', process.env.PUBLIC_URL + '/assets/resume/NTielman.pdf');
                        tempLink.setAttribute('download', 'NTielman-resume.pdf');
                        tempLink.click()
                    }}
                    data-tooltip='Download Resume'>
                    <FontAwesomeIcon icon={faFile} />
                </div>
                <div className='btn contact-btn' role="button" title="contact"
                    onClick={() => { window.location.href = '#contact' }}
                    data-tooltip='Contact'>
                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                </div>
            </label>
        </nav>
    );
}

export default Nav;