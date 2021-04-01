import React, { useRef } from 'react';

const DesProject = (props) => {
    const cardRef = useRef();
    const titleBoxRef = useRef();

    return (
        <div className='card-hover-area'
            onMouseMove={(event) => {
                let xAxis = (window.innerWidth / 2 - event.pageX) / 10;
                let yAxis = (window.innerHeight / 2 - event.pageY) / 10;

                cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            }}

            onMouseEnter={() => {
                titleBoxRef.current.style.transform = 'translateZ(6rem)';
            }}

            onMouseLeave={() => {
                cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
                titleBoxRef.current.style.transform = 'translateZ(0px)';
            }}>

            <div ref={cardRef} className='project-card des'>
                <img src={process.env.PUBLIC_URL + props.project.image} alt='project preview' />
                <div ref={titleBoxRef} className='card-content des'>
                    <h3 className='card-title des'>{props.project.title}</h3>
                    <p className='card-subtitle des'>{props.project.description}</p>
                </div>
                <a className='flickr-link social-btn' href={props.project.galleryUrl} target='_blank' rel="noreferrer noopener">
                    <i className="fab fa-flickr"></i>
                    <p className='btn-text'>View Gallery</p>
                </a>
            </div>
        </div>
    );
}

export default DesProject;