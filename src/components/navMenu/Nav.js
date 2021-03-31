import React from 'react';
import { useSelector } from 'react-redux';

const Nav = () => {
    const getMode = useSelector(state => state.devMode);

    return (
        <div className='menu'>
            <input type='checkbox' id='menu-checkbox' />
            <label htmlFor='menu-checkbox' className='toggle-menu'>
                <div className={getMode ? "btn dev" : "btn des"} >
                    <i className="fas fa-bars menuBtn"></i>
                    <i className="fas fa-times closeBtn"></i>
                </div>

                <div className={getMode ? "btn dev" : "btn des"}
                    onClick={() => { window.location.href = '#home' }}
                    data-tooltip='Home'>
                    <i className="fas fa-home"></i>
                </div>
                <div className={getMode ? "btn dev" : "btn des"}
                    onClick={() => { window.location.href = '#about' }}
                    data-tooltip='About'>
                    <i className="fas fa-user"></i>
                </div>
                <div className={getMode ? "btn dev" : "btn des"}
                    onClick={() => { window.location.href = '#projects' }}
                    data-tooltip='Projects'>
                    <i className="fas fa-pen"></i>
                </div>
                <div className={getMode ? "btn dev" : "btn des"}
                    onClick={() => {
                        const tempLink = document.createElement('a');
                        tempLink.setAttribute('href', process.env.PUBLIC_URL + '/assets/resume/NTielman.pdf');
                        tempLink.setAttribute('download', 'NTielman-resume.pdf');
                        tempLink.click()
                    }}
                    data-tooltip='Resume'>
                    <i className="fas fa-file"></i>
                </div>
                <div className={getMode ? "btn dev" : "btn des"}
                    onClick={() => { window.location.href = '#contact' }}
                    data-tooltip='Contact'>
                    <i className="fas fa-envelope-open-text"></i>
                </div>
            </label>
        </div>
    );
}

export default Nav;