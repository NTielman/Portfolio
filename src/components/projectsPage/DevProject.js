import React, { useEffect, useState, useRef } from 'react';
import DevButton from '../button/DevButton';
import lodash from "lodash";

import { gsap } from 'gsap';
import { Timeline } from 'gsap/gsap-core';

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
    const textContainerRef = useRef();
    const cardRef = useRef();
    const tl = useRef();

    const [clamped, setClamped] = useState(true);
    const [showMoreButton, setShowMoreButton] = useState(true);
    const projectId = `${title.charAt(0).toLowerCase()}${title.slice(1).replace(/\s/g, '')}`

    useEffect(() => {
        tl.current = new Timeline({ paused: true, defaults: { duration: 0.5, ease: "power1.inOut" } })
    }, [])

    const toggleTextClamp = (event) => {
        setClamped(!clamped);
        const isModalOpen = event.target.checked;
        const cardGrid = gsap.utils.toArray(".projects.dev .projects-container, .projects.dev .project-card, .projects.dev .load-more-btn, .filter-menu.dev, .projects.dev .filter-text, .projects.dev h2");

        const flip = (elements, changeFunc, vars) => {
            elements = gsap.utils.toArray(elements);
            vars = vars || {};
            let tl = gsap.timeline({ onComplete: vars.onComplete, delay: vars.delay || 0 }),
                bounds = elements.map(el => el.getBoundingClientRect()),
                copy = {},
                p;
            elements.forEach(el => {
                el._flip && el._flip.progress(1);
                el._flip = tl;
            })
            changeFunc();
            for (p in vars) {
                p !== "onComplete" && p !== "delay" && (copy[p] = vars[p]);
            }
            copy.x = (i, element) => "+=" + (bounds[i].left - element.getBoundingClientRect().left);
            copy.y = (i, element) => "+=" + (bounds[i].top - element.getBoundingClientRect().top);
            return tl.from(elements, copy);
        }

        const swapSizes = () => {
            if (isModalOpen) {
                cardRef.current.classList.add("open");
            } else {
                cardRef.current.classList.remove("open");
            }
        }

        tl.current.add(flip(cardGrid, swapSizes, {
            duration: 1, ease: "power1.inOut"
        }))

        tl.current.play();
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
        const debouncedCheck = lodash.debounce(readMoreButtonIsVisible, 50);

        window.addEventListener("resize", debouncedCheck);

        return () => {
            window.removeEventListener("resize", debouncedCheck);
        };
    }, [textContainerRef])

    return (
        <div className='project-card dev' ref={cardRef}>
            <div className='card-content dev'>
                <div className='card-front'>
                    <picture>
                        <source type="image/webp" srcSet={process.env.PUBLIC_URL + webpImage} />
                        <source type="image/jpeg" srcSet={process.env.PUBLIC_URL + image} />
                        <img loading="lazy" src={process.env.PUBLIC_URL + image} alt='project preview' />
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
                                    onChange={toggleTextClamp}
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
                        {tools.map(tool => {
                            return (<li className='card-tool' key={tool}>{tool}</li>);
                        })}
                    </ul>

                    <div className='card-links'>
                        {(demoUrl || videoDemoUrl) && (
                            <DevButton className='demo-link social-btn-container'>
                                <a
                                    className='social-btn'
                                    href={demoUrl || videoDemoUrl}
                                    target='_blank'
                                    rel="noreferrer noopener">
                                    <i className="fas fa-play"></i>
                                    <span className='btn-text'>{demoUrl ? 'live' : 'video'} demo</span>
                                </a>
                            </DevButton>
                        )}

                        <DevButton className='github-link social-btn-container'>
                            <a
                                className='social-btn'
                                href={githubUrl}
                                target='_blank'
                                rel="noreferrer noopener">
                                <i className="fab fa-github"></i>
                                <span className='btn-text'>Source code</span>
                            </a>
                        </DevButton>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DevProject;