import React from 'react';
import DevAbout from './DevAbout';
import DesignAbout from './DesignAbout';

const About = () => {

    return (
        <section className='about page' id='about'>
            <DevAbout />
            <DesignAbout />
        </section>
    );
}

export default About;