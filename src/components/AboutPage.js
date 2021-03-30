import React from 'react';
// import { useSelector } from 'react-redux';
import DevAbout from './DevAboutPage';
import DesignAbout from './DesignAboutPage';

const About = () => {

    // const getMode = useSelector(state => state.devMode);

    return (
        <div className='about page' id='about'>
            <DevAbout />
            <DesignAbout />
            {/* {getMode ? <DevAbout /> : <DesignAbout />} */}
        </div>
    );
}

export default About;