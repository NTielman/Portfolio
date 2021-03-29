import React from 'react';
import { useSelector } from 'react-redux';
import DevHomePage from './DevHomePage';
import DesignHomePage from './DesignHomePage';

const HomePage = () => {

    const getMode = useSelector(state => state.devMode);

    return (
        <div className='home page' id='home'>
            {/* ipv de een of andere , place tur dos on page i toggle e visibility or opacity */}
            {getMode ? <DevHomePage /> : <DesignHomePage />}
        </div>
    );
}

export default HomePage;