import React, { useEffect, useRef } from 'react';
import { Timeline } from 'gsap/gsap-core';

const DevButton = ({
    className: propClass,
    onClick: propClickHandler,
    title: propTitle,
    children
}) => {
    const devCircleRef = useRef();
    const tl = useRef();

    useEffect(() => {
        tl.current = new Timeline({ paused: true, defaults: { duration: 0, ease: "power0.easeNone" } })
    }, [])

    const handleMouseEnter = (event) => {
        const containerRect = event.target.getBoundingClientRect();
        const x = event.pageX - containerRect.x;
        const y = event.pageY - containerRect.y;

        tl.current
            .to(devCircleRef.current, { left: x, top: y, width: (containerRect.width * 2), height: (containerRect.width * 2) })
            .play()
    }

    const handleMouseLeave = (event) => {
        const containerRect = event.target.getBoundingClientRect();
        const x = event.pageX - containerRect.x;
        const y = event.pageY - containerRect.y;

        tl.current
            .to(devCircleRef.current, { left: x, top: y, width: 0, height: 0 })
            .play()
    }

    return (
        <div
            className={`dev-button ${propClass ? propClass : ''}`}
            onClick={propClickHandler}
            title={propTitle}
            role="button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <span className='circle' ref={devCircleRef}></span>
            {children}
        </div>

    );
}

export default DevButton;