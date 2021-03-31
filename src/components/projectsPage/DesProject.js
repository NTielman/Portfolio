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
                cardRef.current.style.transition = 'none';
                titleBoxRef.current.style.transform = 'translateZ(6rem)';
            }}
            onMouseLeave={() => {
                cardRef.current.style.transition = '0.5s ease';
                cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
                titleBoxRef.current.style.transform = 'translateZ(0px)';
            }}>
            <div ref={cardRef} className='des-project-card'>
                <img src={process.env.PUBLIC_URL + props.project.image} alt='project preview' />
                <div ref={titleBoxRef} className='des-card-content'>
                    <h3 className='des-card-title'>{props.project.title}</h3>
                    <p className='des-card-subtitle'>{props.project.description}</p>
                </div>
                <a className='flickr-link' href={props.project.galleryUrl} target='_blank' rel="noreferrer noopener">
                    <i className="fab fa-flickr"></i>
                    <p className='btn-text'>View Gallery</p>
                </a>
            </div>
        </div>
    );
}

export default DesProject;