import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import FilterMenu from '../filterMenu/FilterMenu';
import DevProject from './DevProject';
import DesProject from './DesProject';
import DevButton from '../button/DevButton';

import { featured_projects as devProjects } from '../../utils/devProjects';
import { featured_projects as desProjects } from '../../utils/desProjects';
import filterProjects, { devFilters, designFilters } from '../../utils/filterProjects';

const Projects = () => {

    const devMode = useSelector(state => state.devMode);
    const activeFilters = useSelector(state => state.activeFilters);
    const [filters, setFilters] = useState([]);

    const projectsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(0);
    const [pageResults, setPageResults] = useState([]);
    const [hasMoreResults, setHasMoreResults] = useState(false);

    useEffect(() => {
        setCurrentPage(0);
    }, [devMode, activeFilters]);

    useEffect(() => {
        if (devMode) {
            setFilters(devFilters(devProjects));
        } else {
            setFilters(designFilters(desProjects));
        }
    }, [devMode]);

    useEffect(() => {
        const getProjects = () => {
            let projects = devMode ? devProjects.map(proj => proj) : desProjects.map(proj => proj);

            if (activeFilters.length > 0) {
                projects = filterProjects(projects, activeFilters);
            }

            const totalResultCount = projects.length;
            const paginatedResults = projects.filter((project, projectIndex) => projectIndex < currentPage + projectsPerPage).map(project => {
                if (devMode) {
                    return (<DevProject project={project} key={project.key} />)
                } else {
                    return (<DesProject project={project} key={project.key} />);
                }
            });
            const pageResultCount = paginatedResults.length;

            return {
                totalResultCount,
                paginatedResults,
                pageResultCount
            };
        }

        setPageResults(getProjects().paginatedResults);
        setHasMoreResults(getProjects().totalResultCount > getProjects().pageResultCount);
    }, [devMode, activeFilters, currentPage]);

    return (
        <section className={`projects page ${devMode ? 'dev' : 'des'}`} id='projects'>

            <h2>Projects</h2>
            <p className='filter-text'>Filter by:</p>
            <FilterMenu filters={filters} />

            <div className='projects-container'>
                {pageResults}
            </div>

            {hasMoreResults && (devMode ? (<DevButton
                className="load-more-btn dev"
                title="Load more projects"
                onClick={() => setCurrentPage(currentPage + projectsPerPage)}
            >Load More</DevButton>) : (<button
                className="load-more-btn des"
                onClick={() => setCurrentPage(currentPage + projectsPerPage)}
            >Load More</button>))}
        </section>
    );
}

export default Projects;