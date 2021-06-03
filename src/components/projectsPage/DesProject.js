import React, { useRef } from 'react';

const DesProject = (props) => {
    const hoverAreaRef = useRef();
    const cardRef = useRef();
    const titleBoxRef = useRef();
    const hasGallery = props.project.galleryUrl;

    return (
        <div className='card-hover-area'
            ref={hoverAreaRef}
            onMouseMove={(event) => {
                const imageRect = hoverAreaRef.current.getBoundingClientRect();
                let xAxis = -((imageRect.x + imageRect.width / 2) - event.pageX) / 5;
                let yAxis = ((imageRect.y + imageRect.height / 2) - event.pageY) / 5;
                cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            }}

            onMouseEnter={() => {
                titleBoxRef.current.style.transform = 'translateZ(6rem)';
                titleBoxRef.current.style.opacity = '1';
            }}

            onMouseLeave={() => {
                cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
                titleBoxRef.current.style.transform = 'translateZ(0px)';
                titleBoxRef.current.style.opacity = '0';
            }}>

            <div ref={cardRef} className='project-card des'>
                <img loading="lazy" src={process.env.PUBLIC_URL + props.project.image} alt='project preview' />
                <div ref={titleBoxRef} className='card-content des'>
                    <h3 className='card-title des'>{props.project.title}</h3>
                    <p className='card-subtitle des'>{props.project.description}</p>
                </div>
            </div>
            <a className='flickr-link social-btn' href={hasGallery ? props.project.galleryUrl : props.project.galleryImgUrl} target='_blank' rel="noreferrer noopener">
                <i className="fab fa-flickr"></i>
                <p className='btn-text'>{hasGallery ? 'View Gallery' : 'View Image'}</p>
            </a>
        </div>
    );
}

export default DesProject;