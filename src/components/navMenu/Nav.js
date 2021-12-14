import React from 'react';
import { useSelector } from 'react-redux';

const Nav = () => {
    const devMode = useSelector(state => state.devMode);

    return (
        <nav className='menu'>
            <input type='checkbox' id='menu-checkbox' className='hide' />
            <label htmlFor='menu-checkbox' className={`toggle-menu ${devMode ? 'dev' : 'des'}`}>
                <div className='btn' role="button" title="menu">
                    <i className="menu-icon fas fa-bars menu-btn"></i>
                    <i className="menu-icon fas fa-times close-btn"></i>
                </div>

                <div className='btn home-btn' role="button" title="home"
                    onClick={() => { window.location.href = '#home' }}
                    data-tooltip='Home'>
                    <i className="menu-icon fas fa-home"></i>
                </div>
                <div className='btn about-btn' role="button" title="about"
                    onClick={() => { window.location.href = '#about' }}
                    data-tooltip='About'>
                    <i className="menu-icon fas fa-user"></i>
                </div>
                <div className='btn projects-btn' role="button" title="projects"
                    onClick={() => { window.location.href = '#projects' }}
                    data-tooltip='Projects'>
                    <i className="menu-icon fas fa-pen"></i>
                </div>
                <div className='btn resume-btn' title="download resume"
                    onClick={() => {
                        const tempLink = document.createElement('a');
                        tempLink.setAttribute('href', process.env.PUBLIC_URL + '/assets/resume/NTielman.pdf');
                        tempLink.setAttribute('download', 'NTielman-resume.pdf');
                        tempLink.click()
                    }}
                    data-tooltip='Download Resume'>
                    <i className="menu-icon fas fa-file"></i>
                </div>
                <div className='btn contact-btn' role="button" title="contact"
                    onClick={() => { window.location.href = '#contact' }}
                    data-tooltip='Contact'>
                    <i className="menu-icon fas fa-envelope-open-text"></i>
                </div>
            </label>
        </nav>
    );
}

export default Nav;