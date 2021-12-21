import React, { useRef } from 'react';

const DevButton = (props) => {
    const devCircleRef = useRef();
    const handleMouseEnter = (event) => {
        const containerRect = event.target.getBoundingClientRect();
        const x = event.pageX - containerRect.x;
        const y = event.pageY - containerRect.y;
        devCircleRef.current.style.left = x + 'px';
        devCircleRef.current.style.top = y + 'px';
    }

    const handleMouseLeave = (event) => {
        const containerRect = event.target.getBoundingClientRect();
        const x = event.pageX - containerRect.x;
        const y = event.pageY - containerRect.y;
        devCircleRef.current.style.left = x + 'px';
        devCircleRef.current.style.top = y + 'px';
    }

    return (
        <div
            className={`dev-button ${props.className ? props.className : ''}`}
            onClick={props.onClick}
            title={props.title}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <span className='circle' ref={devCircleRef}></span>
            {props.children}
        </div>

    );
}

export default DevButton;