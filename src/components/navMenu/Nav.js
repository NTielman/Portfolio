import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import { Timeline } from 'gsap/gsap-core';

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
                <div className='btn' role="button" aria-label="menu" title="menu">
                    <i className="fas fa-bars menu-icon"></i>
                    <i className="fas fa-times close-icon"></i>
                </div>

                <div className='btn home-btn' role="button" aria-label="home" title="home"
                    onClick={() => { window.location.href = '#home' }}
                    data-tooltip='Home'>
                    <i className="fas fa-home"></i>
                </div>
                <div className='btn about-btn' role="button" aria-label="about" title="about"
                    onClick={() => { window.location.href = '#about' }}
                    data-tooltip='About'>
                    <i className="fas fa-user"></i>
                </div>
                <div className='btn projects-btn' role="button" aria-label="projects" title="projects"
                    onClick={() => { window.location.href = '#projects' }}
                    data-tooltip='Projects'>
                    <i className="fas fa-pen"></i>
                </div>
                <div className='btn resume-btn' aria-label="download resume" title="download resume"
                    onClick={() => {
                        const tempLink = document.createElement('a');
                        tempLink.setAttribute('href', process.env.PUBLIC_URL + '/assets/resume/NTielman.pdf');
                        tempLink.setAttribute('download', 'NTielman-resume.pdf');
                        tempLink.click()
                    }}
                    data-tooltip='Download Resume'>
                    <i className="fas fa-file"></i>
                </div>
                <div className='btn contact-btn' role="button" aria-label="contact" title="contact"
                    onClick={() => { window.location.href = '#contact' }}
                    data-tooltip='Contact'>
                    <i className="fas fa-envelope-open-text"></i>
                </div>
            </label>
        </nav>
    );
}

export default Nav;