import React from 'react';
import DevHomePage from './DevHomePage';
import DesignHomePage from './DesignHomePage';

const HomePage = () => {

    return (
        <header className='home page' id='home'>
            <DevHomePage />
            <DesignHomePage />
        </header>
    );
}

export default HomePage;