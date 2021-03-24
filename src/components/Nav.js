import React from 'react';

const Nav = () => {

    return (
        <div className='menu'>
            <input type='checkbox' id='menu-checkbox' />
            <label htmlFor='menu-checkbox' className='toggle-menu'>
                <div className='btn'>
                    <i className="fas fa-bars menuBtn"></i>
                    <i className="fas fa-times closeBtn"></i>
                </div>

                <div className="btn"
                    onClick={() => { window.location.href = '#home' }}
                    data-tooltip='Home'>
                    <i className="fas fa-home"></i>
                </div>
                <div className="btn"
                    onClick={() => { window.location.href = '#about' }}
                    data-tooltip='About'>
                    <i className="fas fa-user"></i>
                </div>
                <div className="btn"
                    onClick={() => { window.location.href = '#projects' }}
                    data-tooltip='Projects'>
                    <i className="fas fa-pen"></i>
                </div>
                <div className="btn"
                    onClick={() => {
                        const tempLink = document.createElement('a');
                        tempLink.setAttribute('href', process.env.PUBLIC_URL + '/NTielman.pdf');
                        tempLink.setAttribute('download', 'NTielman-resume.pdf');
                        tempLink.click()
                    }}
                    data-tooltip='Resume'>
                    <i className="fas fa-file"></i>
                </div>
                <div className="btn"
                    onClick={() => { window.location.href = '#contact' }}
                    data-tooltip='Contact'>
                    <i className="fas fa-envelope-open-text"></i>
                </div>
            </label>
        </div>
    );
}

export default Nav;