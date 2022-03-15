import React, { useEffect, useState, useRef } from 'react';
import DevButton from '../button/DevButton';
import { debounce } from "lodash";
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const DevProject = ({
    project: {
        title,
        githubUrl,
        videoDemoUrl,
        demoUrl,
        shortDescription,
        longDescription,
        tools,
        image,
        webpImage,
    }
}) => {
    gsap.registerPlugin(Flip);
    const textContainerRef = useRef();
    const cardRef = useRef();

    const [clamped, setClamped] = useState(true);
    const [showMoreButton, setShowMoreButton] = useState(true);
    const projectId = `${title.charAt(0).toLowerCase()}${title.slice(1).replace(/\s/g, '')}`

    const toggleCardModal = () => {
        // Get initial state
        const state = Flip.getState(".projects.dev .projects-container, .projects.dev .project-card");

        // Make state changes
        cardRef.current.classList.toggle("open");
        setClamped(!clamped);

        // animate to new state
        Flip.from(state, {
            nested: true,
            prune: true,
        });
    }

    // set text clamping
    useEffect(() => {
        const elOverflowsContainer = (el) => {
            const { clientHeight, scrollHeight } = el;
            return clientHeight !== scrollHeight;
        };

        const getMaxLines = (el) => {
            const { clientHeight } = el;
            const fontsize = 16;
            const lineHeight = 1.1;
            const maxLines = Math.floor(clientHeight / (fontsize * lineHeight));
            return maxLines;
        };

        const readMoreButtonIsVisible = () => {
            if (textContainerRef.current) {
                const hadClampClass = textContainerRef.current.classList.contains("clamp");
                if (!hadClampClass) textContainerRef.current.classList.add("clamp");
                textContainerRef.current.style.setProperty('--maxlines', 0);

                const textOverflowsContainer = elOverflowsContainer(textContainerRef.current);
                setShowMoreButton(textOverflowsContainer);

                if (!hadClampClass) textContainerRef.current.classList.remove("clamp");

                if (textOverflowsContainer) {
                    textContainerRef.current.style.setProperty('--maxlines', getMaxLines(textContainerRef.current));
                }
            }
        };

        readMoreButtonIsVisible();
        const debouncedCheck = debounce(readMoreButtonIsVisible, 50);

        window.addEventListener("resize", debouncedCheck);

        return () => {
            window.removeEventListener("resize", debouncedCheck);
        };
    }, [textContainerRef])

    return (
        <article className='project-card dev' ref={cardRef}>
            <div className='card-content dev'>
                <div className='card-front'>
                    <picture>
                        <source type="image/webp" srcSet={process.env.PUBLIC_URL + webpImage} />
                        <source type="image/jpeg" srcSet={process.env.PUBLIC_URL + image} />
                        <img width="1600" height="900" loading="lazy" src={process.env.PUBLIC_URL + image} alt='project preview' />
                    </picture>

                    <div className='front-titles'>
                        <h3 className='card-title dev'>{title}</h3>
                        <p className='card-subtitle dev'>{shortDescription}</p>
                    </div>
                </div>

                <div className='card-back'>
                    <div className='card-description-container'>
                        <p
                            className={`card-description ${clamped ? 'clamp' : ''}`}
                            ref={textContainerRef}>
                            {longDescription}
                        </p>
                        {showMoreButton && (
                            <>
                                <input
                                    type="checkbox"
                                    name="readMore"
                                    className="hide"
                                    title="read more"
                                    checked={!clamped}
                                    onChange={toggleCardModal}
                                    id={projectId}
                                    value={projectId}>
                                </input>

                                <label
                                    className="card-description-btn read-more"
                                    htmlFor={projectId}>
                                    Read {clamped ? "more" : "less"}
                                </label>
                            </>
                        )}
                    </div>

                    <ul className='card-tools'>
                        {tools && tools.map(tool => {
                            return (<li className='card-tool' key={tool}>{tool}</li>);
                        })}
                    </ul>

                    <div className='card-links'>
                        {(demoUrl || videoDemoUrl) && (
                            <DevButton
                                className='demo-link social-btn-container'
                                title={`view ${demoUrl ? 'live' : 'video'} demo of ${title}`}>
                                <a
                                    className='social-btn'
                                    href={demoUrl || videoDemoUrl}
                                    target='_blank'
                                    title={`view ${demoUrl ? 'live' : 'video'} demo of ${title}`}
                                    rel="noreferrer noopener">
                                    <FontAwesomeIcon icon={faPlay} />
                                    <span className='btn-text'>{demoUrl ? 'live' : 'video'} demo</span>
                                </a>
                            </DevButton>
                        )}

                        <DevButton
                            className='github-link social-btn-container'
                            title={`view ${title}'s code on Github`}>
                            <a
                                className='social-btn'
                                href={githubUrl}
                                target='_blank'
                                title={`view ${title}'s code on Github`}
                                rel="noreferrer noopener">
                                <FontAwesomeIcon icon={faGithub} />
                                <span className='btn-text'>Source code</span>
                            </a>
                        </DevButton>
                    </div>
                </div>
            </div>

        </article>
    );
}

export default DevProject;