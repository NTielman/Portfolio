import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlickr } from '@fortawesome/free-brands-svg-icons';

const DesProject = ({
    project: {
        title,
        description,
        galleryUrl,
        galleryImgUrl,
        image,
        webpImage,
    }
}) => {
    const hoverAreaRef = useRef();
    const cardRef = useRef();
    const titleBoxRef = useRef();

    const handleMousemove = (event) => {
        const imageRect = hoverAreaRef.current.getBoundingClientRect();
        let xAxis = -((imageRect.x + imageRect.width / 2) - event.pageX) / 5;
        let yAxis = ((imageRect.y + imageRect.height / 2) - event.pageY) / 5;
        cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    const handleMouseEnter = () => {
        titleBoxRef.current.style.transform = 'translateZ(6rem)';
        titleBoxRef.current.style.opacity = '1';
    }

    const handleMouseLeave = () => {
        cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        titleBoxRef.current.style.transform = 'translateZ(0px)';
        titleBoxRef.current.style.opacity = '0';
    }

    return (
        <article className='card-hover-area'
            ref={hoverAreaRef}
            onMouseMove={handleMousemove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>

            <div ref={cardRef} className='project-card'>
                <picture>
                    <source type="image/webp" srcSet={process.env.PUBLIC_URL + webpImage} />
                    <source type="image/jpeg" srcSet={process.env.PUBLIC_URL + image} />
                    <img width="100" height="100" loading="lazy" src={process.env.PUBLIC_URL + image} alt='project preview' />
                </picture>
                <div ref={titleBoxRef} className='card-content'>
                    <h3 className='card-title'>{title}</h3>
                    <p className='card-subtitle'>{description}</p>
                </div>
            </div>
            <a
                className='flickr-link social-btn'
                href={galleryUrl ? galleryUrl : galleryImgUrl}
                target='_blank'
                rel="noreferrer noopener"
                title={`View ${title} ${galleryUrl ? 'Gallery' : 'Image'}`}>
                <FontAwesomeIcon icon={faFlickr} />
                <span className='btn-text'>View {galleryUrl ? 'Gallery' : 'Image'}</span>
            </a>
        </article>
    );
}

export default DesProject;