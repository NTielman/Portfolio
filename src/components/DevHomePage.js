import React, { useRef } from 'react';
import bone from '../images/dev-home-images/bone.png';

const DevHomePage = () => {

    const currentMousePos = {
        x: -1,
        y: -1
    };

    const imageRef = useRef();

    return (
        <div className='flesh-bg'
            onMouseMove={(event) => {
                currentMousePos.x = event.pageX - 75;
                currentMousePos.y = event.pageY - 75;

                imageRef.current.style.MaskPositionX = currentMousePos.x + 'px';
                imageRef.current.style.webkitMaskPositionX = currentMousePos.x + 'px';

                imageRef.current.style.MaskPositionY = currentMousePos.y + 'px';
                imageRef.current.style.webkitMaskPositionY = currentMousePos.y + 'px';

            }}>
            <img ref={imageRef} src={bone} alt='background x-ray vision' className='bone-bg' />
        </div>
    );
}

export default DevHomePage;