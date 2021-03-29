import React from 'react';

const DevProject = (props) => {

    return (
        <div className='project-card'>
            <div className='card-content'>
                <div className='card-front'>
                    <img src={process.env.PUBLIC_URL + props.project.image} alt='project preview' />
                    <div className='front-titles'>
                        <h3 className='card-title'>{props.project.title}</h3>
                        <p className='card-subtitle'>{props.project.shortDescription}</p>
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
                        {props.project.demoUrl ? <a className='demo-link' href={props.project.demoUrl} target='_blank' rel="noreferrer noopener"><i className="fas fa-play"></i><p>View live demo</p></a> : null}

                        <a className='github-link' href={props.project.githubUrl} target='_blank' rel="noreferrer noopener">
                            <i className="fab fa-github"></i>
                            <p>View on Github</p></a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default DevProject;