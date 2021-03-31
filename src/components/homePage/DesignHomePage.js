import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Parallax from 'parallax-js';

const DesignHomePage = () => {

    const getMode = useSelector(state => state.devMode);
    const sceneRef = useRef();
    const backgroundStyle = {
        background: `url(${process.env.PUBLIC_URL}/assets/images/home/design/1skyBackground.png) no-repeat`,
        backgroundSize: '100%'
    };

    useEffect(() => {
        const parallaxScene = new Parallax(sceneRef.current, {
            relativeInput: true,
            hoverOnly: true,
        })

        parallaxScene.enable();

        return () => parallaxScene.disable();

    }, [])

    return (
        <div className={getMode ? 'hide' : 'parallax-container'}
            style={backgroundStyle}>
            <ul ref={sceneRef} id='scene'>
                <li className='layer tower' data-depth='0.2'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/home/design/2waterTower.png'} alt='background tower' />
                </li>
                <li className='layer trees' data-depth='0.3'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/home/design/3treesMidground.png'} alt='background trees' />
                </li>
                <li className='layer shack' data-depth='0.4'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/home/design/4mysteryShack.png'} alt='mystery shack' />
                </li>
                <li className='layer minigame' data-depth='0.4'>
                    <img className='minigame-icon' src={process.env.PUBLIC_URL + '/assets/images/home/design/6minigameIcon.png'} alt='minigame icon' />
                </li>
                <li className='layer floating-characters' data-depth='1'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/home/design/5floatingCharacters.png'} alt='floating characters' />
                </li>
                <li className='layer ground-characters' data-depth='0.5'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/home/design/5groundCharacters.png'} alt='ground characters' />
                </li>
                <li className='layer foreground-trees' data-depth='0'>
                    <img src={process.env.PUBLIC_URL + '/assets/images/home/design/7treesForeground.png'} alt='foreground trees' />
                </li>
            </ul>
        </div>
    );
}

export default DesignHomePage;