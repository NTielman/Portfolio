import React from 'react';

const DevProject = (props) => {

    return (
        <div className='project-card dev'>
            <div className='card-content dev'>
                <div className='card-front'>
                    <picture>
                        <source type="image/webp" srcSet={process.env.PUBLIC_URL + props.project.webpImage} />
                        <source type="image/jpeg" srcSet={process.env.PUBLIC_URL + props.project.image} />
                        <img loading="lazy" src={process.env.PUBLIC_URL + props.project.image} alt='project preview' />
                    </picture>

                    <div className='front-titles'>
                        <h3 className='card-title dev'>{props.project.title}</h3>
                        <p className='card-subtitle dev'>{props.project.shortDescription}</p>
                    </div>
                </div>

                <div className='card-back'>
                    <p className='card-description'>{props.project.longDescription}</p>

                    <ul className='card-tools'>
                        {props.project.tools.map(tool => {
                            return (<li className='card-tool' key={tool}>{tool}</li>);
                        })}
                    </ul>

                    <div className='card-links'>
                        {props.project.demoUrl ? <a className='demo-link social-btn' href={props.project.demoUrl} target='_blank' rel="noreferrer noopener"><i className="fas fa-play"></i><span className='btn-text'>View live demo</span></a> : null}

                        {props.project.videoDemoUrl ? <a className='demo-link social-btn' href={props.project.videoDemoUrl} target='_blank' rel="noreferrer noopener"><i className="fas fa-play"></i><span className='btn-text'>View video demo</span></a> : null}

                        <a className='github-link social-btn' href={props.project.githubUrl} target='_blank' rel="noreferrer noopener">
                            <i className="fab fa-github"></i>
                            <span className='btn-text'>View on Github</span></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DevProject;