import React from 'react';
import DevHomePage from './DevHomePage';
import DesignHomePage from './DesignHomePage';

const HomePage = () => {

    return (
        <div className='home page' id='home'>
            <DevHomePage />
            <DesignHomePage />
        </div>
    );
}

export default HomePage;