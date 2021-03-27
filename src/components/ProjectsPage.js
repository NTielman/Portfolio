import React from 'react';
import FilterMenu from './FilterMenu';
import { useSelector } from 'react-redux';
import { featured_projects as devProjects } from '../functions/devProjects';
import { featured_projects as desProjects } from '../functions/desProjects';
import DevProject from './DevProject';
import DesProject from './DesProject';

const Projects = () => {

    const getMode = useSelector(state => state.devMode);

    const getDevProjects = devProjects.map(project => {
        return (<DevProject project={project} />);
    })
    const getDevFilters = () => {
        const filters = [];
        devProjects.forEach(project => {
            const tools = project.tools;
            tools.forEach(tool => {
                if (!filters.includes(tool)) {
                    filters.push(tool);
                }
            })
        })
        return filters;
    };

    const getDesignProjects = desProjects.map(project => {
        return (<DesProject project={project} />);
    })
    const getDesFilters = () => {
        const filters = [];
        desProjects.forEach(project => {
            const typeOfWork = project.typeOfWork;
            if (!filters.includes(typeOfWork)) {
                filters.push(typeOfWork);
            }
        })
        return filters;
    };

    return (
        <div className='projects page' id='projects'>
            <h1>Projects</h1>
            <FilterMenu filters={getMode ? getDevFilters() : getDesFilters()} />
            { getMode ? getDevProjects : getDesignProjects}
        </div>
    );
}

export default Projects;