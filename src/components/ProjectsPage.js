import React from 'react';
import FilterMenu from './FilterMenu';
import Project from './Project';

const Projects = () => {
    const projectArray = ['proj1', 'proj2', 'proj3']

    return (
        <div>
            <h1>Projects</h1>
            <FilterMenu />
            {projectArray.map(project => {
                return (
                    <Project title={project} />
                )
            })}
        </div>
    );
}

export default Projects;