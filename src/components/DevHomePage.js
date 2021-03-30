import React, { useRef } from 'react';
import bone from '../images/dev-home-images/bone.png';
import { useSelector } from 'react-redux';

const DevHomePage = () => {
    const getMode = useSelector(state => state.devMode);

    // set initial cursor position
    const currentMousePos = {
        x: -1,
        y: -1
    };

    const maskPos = {
        x: -1,
        y: -1
    };

    const eyesPos = {
        x: 0,
        y: 0
    };

    let windowScroll = {};

    const imageRef = useRef();
    const eyeRef1 = useRef();
    const eyeRef2 = useRef();
    // className='flesh-bg'

    return (
        <div className={getMode ? 'flesh-bg' : 'hide'}
            onMouseMove={(event) => {
                // on page scroll get amount scrolled
                windowScroll = imageRef.current.getBoundingClientRect();

                currentMousePos.x = event.pageX;
                currentMousePos.y = event.pageY;

                //update xray mask positioning
                maskPos.x = currentMousePos.x - 75;
                maskPos.y = currentMousePos.y - windowScroll.y - 75;
                imageRef.current.style.MaskPositionX = maskPos.x + 'px';
                imageRef.current.style.webkitMaskPositionX = maskPos.x + 'px';

                imageRef.current.style.MaskPositionY = maskPos.y + 'px';
                imageRef.current.style.webkitMaskPositionY = maskPos.y + 'px';

                // pupils positioning
                eyesPos.x = currentMousePos.x * 100 / window.innerWidth;
                eyesPos.y = currentMousePos.y * 100 / window.innerHeight;

                eyeRef1.current.style.left = (eyesPos.x / 2) + '%';
                eyeRef1.current.style.top = (eyesPos.y / 2) + '%';
                eyeRef1.current.style.transform = `translateY(${eyesPos.y}%) translateX(${eyesPos.x}%)`;

                eyeRef2.current.style.left = (eyesPos.x / 2) + '%';
                eyeRef2.current.style.top = (eyesPos.y / 2) + '%';
                eyeRef2.current.style.transform = `translateY(${eyesPos.y}%) translateX(${eyesPos.x}%)`;
            }}>
            <div className='eyes'>
                <div className='eye'>
                    <div ref={eyeRef1} className='pupil'></div>
                </div>
                <div className='eye'>
                    <div ref={eyeRef2} className='pupil'></div>
                </div>
            </div>
            <img ref={imageRef} src={bone} alt='background x-ray vision' className='bone-bg' />
        </div>
    );
}

export default DevHomePage;