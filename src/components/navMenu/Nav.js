import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import { Timeline } from 'gsap/gsap-core';

const Nav = () => {
    const navRef = useRef();
    const q = gsap.utils.selector(navRef);
    const tl = useRef();
    const devMode = useSelector(state => state.devMode);

    // open nav animation
    useEffect(() => {
        tl.current = new Timeline({ paused: true })
            .to(q(".btn:not(:first-child)"), { opacity: 1, duration: 0 })
            .to(q(".btn:not(:first-child)"), { y: (index) => `${(index + 1) * 4.5}rem`, stagger: { amount: 0.5 }, ease: "elastic.easeOut", duration: 0 });
    }, [])

    const handleNavClick = (event) => {
        const menuIsOpen = event.currentTarget.checked;
        menuIsOpen ? tl.current.play() : tl.current.reverse()
    }

    return (
        <nav className='menu' ref={navRef}>
            <input type='checkbox' id='menu-checkbox' className='hide' onChange={handleNavClick} />
            <label htmlFor='menu-checkbox' className={`toggle-menu ${devMode ? 'dev' : 'des'}`}>
                <div className='btn' role="button" title="menu">
                    <i className="fas fa-bars menu-icon"></i>
                    <i className="fas fa-times close-icon"></i>
                </div>

                <div className='btn home-btn' role="button" title="home"
                    onClick={() => { window.location.href = '#home' }}
                    data-tooltip='Home'>
                    <i className="fas fa-home"></i>
                </div>
                <div className='btn about-btn' role="button" title="about"
                    onClick={() => { window.location.href = '#about' }}
                    data-tooltip='About'>
                    <i className="fas fa-user"></i>
                </div>
                <div className='btn projects-btn' role="button" title="projects"
                    onClick={() => { window.location.href = '#projects' }}
                    data-tooltip='Projects'>
                    <i className="fas fa-pen"></i>
                </div>
                <div className='btn resume-btn' title="download resume"
                    onClick={() => {
                        const tempLink = document.createElement('a');
                        tempLink.setAttribute('href', process.env.PUBLIC_URL + '/assets/resume/NTielman.pdf');
                        tempLink.setAttribute('download', 'NTielman-resume.pdf');
                        tempLink.click()
                    }}
                    data-tooltip='Download Resume'>
                    <i className="fas fa-file"></i>
                </div>
                <div className='btn contact-btn' role="button" title="contact"
                    onClick={() => { window.location.href = '#contact' }}
                    data-tooltip='Contact'>
                    <i className="fas fa-envelope-open-text"></i>
                </div>
            </label>
        </nav>
    );
}

export default Nav;