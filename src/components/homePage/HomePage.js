import React from 'react';
import DevHomePage from './DevHomePage';
import DesignHomePage from './DesignHomePage';

const HomePage = () => {

    return (
        <section className='home page' id='home'>
            <DevHomePage />
            <DesignHomePage />
        </section>
    );
}

export default HomePage;