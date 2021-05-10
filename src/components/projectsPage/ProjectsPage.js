import React from 'react';
import { useSelector } from 'react-redux';

import FilterMenu from '../filterMenu/FilterMenu';
import DevProject from './DevProject';
import DesProject from './DesProject';

import { featured_projects as devProjects } from '../../functions/devProjects';
import { featured_projects as desProjects } from '../../functions/desProjects';
import filterProjects from '../../functions/filterProjects';

const Projects = () => {

    const devMode = useSelector(state => state.devMode);
    const activeFilters = useSelector(state => state.activeFilters);

    const getDevProjects = () => {
        let projects = devProjects.map(proj => proj);

        if (activeFilters.length > 0) {
            projects = filterProjects(projects, activeFilters);
        }

        return projects.map(project => {
            return (<DevProject project={project} key={project.key} />);
        });
    }

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

    const getDesignProjects = () => {
        let projects = desProjects.map(proj => proj);

        if (activeFilters.length > 0) {
            projects = filterProjects(projects, activeFilters);
        }

        return projects.map(project => {
            return (<DesProject project={project} key={project.key} />);
        });
    }

    const getDesignFilters = () => {
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
        <section className='projects page' id='projects'>

            <h1>Projects</h1>
            <h4>Filter by:</h4>
            <FilterMenu filters={devMode ? getDevFilters() : getDesignFilters()} />

            <div className={devMode ? 'projects-container' : 'hide'}>
                {getDevProjects()}
            </div>
            <div className={devMode ? 'hide' : 'projects-container'}>
                {getDesignProjects()}
            </div>
        </section>
    );
}

export default Projects;