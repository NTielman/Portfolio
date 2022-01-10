import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

const DevHomePage = () => {

    const devMode = useSelector(state => state.devMode);
    const mousePos = {
        x: -1,
        y: -1
    };

    const maskPos = {
        x: -1,
        y: -1
    };

    const pupilsPos = {
        x: 0,
        y: 0
    };

    let windowScroll = {};

    const imageRef = useRef();
    const leftPupilRef = useRef();
    const rightPupilRef = useRef();

    const handleMouseMove = (event) => {
        // on page scroll get amount scrolled
        windowScroll = imageRef.current.getBoundingClientRect();

        mousePos.x = event.pageX;
        mousePos.y = event.pageY;

        // update xray mask positioning
        maskPos.x = mousePos.x - 75;
        maskPos.y = mousePos.y - windowScroll.y - 75;
        imageRef.current.style.MaskPositionX = maskPos.x + 'px';
        imageRef.current.style.webkitMaskPositionX = maskPos.x + 'px';
        imageRef.current.style.MaskPositionY = maskPos.y + 'px';
        imageRef.current.style.webkitMaskPositionY = maskPos.y + 'px';

        // pupils positioning
        pupilsPos.x = mousePos.x * 100 / window.innerWidth;
        pupilsPos.y = mousePos.y * 100 / window.innerHeight;

        leftPupilRef.current.style.left = (pupilsPos.x / 2) + '%';
        leftPupilRef.current.style.top = (pupilsPos.y / 2) + '%';
        leftPupilRef.current.style.transform = `translate(${pupilsPos.x}%, ${pupilsPos.y}%)`;

        rightPupilRef.current.style.left = (pupilsPos.x / 2) + '%';
        rightPupilRef.current.style.top = (pupilsPos.y / 2) + '%';
        rightPupilRef.current.style.transform = `translate(${pupilsPos.x}%, ${pupilsPos.y}%)`;
    }

    return (
        <div className={devMode ? 'flesh-bg home-scene-container' : 'hide'}
            onMouseMove={handleMouseMove}>

            <div className='eyes'>
                <div className='eye left'>
                    <div ref={leftPupilRef} className='pupil left'></div>
                </div>
                <div className='eye right'>
                    <div ref={rightPupilRef} className='pupil right'></div>
                </div>
            </div>

            <picture>
                <source type="image/webp" srcSet={process.env.PUBLIC_URL + '/assets/images/home/dev/bone.webp'} />
                <source type="image/png" srcSet={process.env.PUBLIC_URL + '/assets/images/home/dev/bone.png'} />
                <img ref={imageRef} src={process.env.PUBLIC_URL + '/assets/images/home/dev/bone.png'} alt='x-ray background' className='bone-bg' width="1600" height="900" />
            </picture>
        </div>
    );
}

export default DevHomePage;