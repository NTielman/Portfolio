import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Parallax from 'parallax-js';

const DesignHomePage = () => {

    const devMode = useSelector(state => state.devMode);
    const sceneRef = useRef();

    useEffect(() => {
        const parallaxScene = new Parallax(sceneRef.current, {
            relativeInput: true,
            hoverOnly: true,
        })

        parallaxScene.enable();

        return () => parallaxScene.disable();

    }, [])

    return (
        <div className={devMode ? 'hide' : 'parallax-container home-scene-container'}>
            <ul ref={sceneRef} id='scene'>
                <li className='layer tower' data-depth='0.2'>
                    <picture>
                        <source type="image/webp" srcSet={process.env.PUBLIC_URL + '/assets/images/home/design/2waterTower.webp'} />
                        <source type="image/png" srcSet={process.env.PUBLIC_URL + '/assets/images/home/design/2waterTower.png'} />
                        <img width="1600" height="900" loading="lazy" src={process.env.PUBLIC_URL + '/assets/images/home/design/2waterTower.png'} alt='background tower' />
                    </picture>
                </li>
                <li className='layer trees' data-depth='0.3'>
                    <picture>
                        <source type="image/webp" srcSet={process.env.PUBLIC_URL + '/assets/images/home/design/3treesMidground.webp'} />
                        <source type="image/png" srcSet={process.env.PUBLIC_URL + '/assets/images/home/design/3treesMidground.png'} />
                        <img width="1600" height="900" loading="lazy" src={process.env.PUBLIC_URL + '/assets/images/home/design/3treesMidground.png'} alt='background trees' />
                    </picture>
                </li>
                <li className='layer shack' data-depth='0.4'>
                    <picture>
                        <source type="image/webp" srcSet={process.env.PUBLIC_URL + '/assets/images/home/design/4mysteryShack.webp'} />
                        <source type="image/png" srcSet={process.env.PUBLIC_URL + '/assets/images/home/design/4mysteryShack.png'} />
                        <img width="1600" height="900" loading="lazy" src={process.env.PUBLIC_URL + '/assets/images/home/design/4mysteryShack.png'} alt='mystery shack' />
                    </picture>
                </li>
                <li className='layer floating-characters' data-depth='1'>
                    <picture>
                        <source type="image/webp" srcSet={process.env.PUBLIC_URL + '/assets/images/home/design/5floatingCharacters.webp'} />
                        <source type="image/png" srcSet={process.env.PUBLIC_URL + '/assets/images/home/design/5floatingCharacters.png'} />
                        <img width="1600" height="900" loading="lazy" src={process.env.PUBLIC_URL + '/assets/images/home/design/5floatingCharacters.png'} alt='floating characters' />
                    </picture>
                </li>
                <li className='layer ground-characters' data-depth='0.5'>
                    <picture>
                        <source type="image/webp" srcSet={process.env.PUBLIC_URL + '/assets/images/home/design/5groundCharacters.webp'} />
                        <source type="image/png" srcSet={process.env.PUBLIC_URL + '/assets/images/home/design/5groundCharacters.png'} />
                        <img width="1600" height="900" loading="lazy" src={process.env.PUBLIC_URL + '/assets/images/home/design/5groundCharacters.png'} alt='ground characters' />
                    </picture>
                </li>
                <li className='layer foreground-trees' data-depth='0'>
                    <picture>
                        <source type="image/webp" srcSet={process.env.PUBLIC_URL + '/assets/images/home/design/7treesForeground.webp'} />
                        <source type="image/png" srcSet={process.env.PUBLIC_URL + '/assets/images/home/design/7treesForeground.png'} />
                        <img width="1600" height="900" loading="lazy" src={process.env.PUBLIC_URL + '/assets/images/home/design/7treesForeground.png'} alt='foreground trees' />
                    </picture>
                </li>
            </ul>
        </div>
    );
}

export default DesignHomePage;