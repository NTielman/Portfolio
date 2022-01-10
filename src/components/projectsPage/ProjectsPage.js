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
    const [projects, setProjects] = useState([]);
    const [visibleProjects, setVisibleProjects] = useState([]);
    const [hasMoreResults, setHasMoreResults] = useState(false);

    // (Re)Set current page
    useEffect(() => {
        setCurrentPage(0);
    }, [devMode, activeFilters]);

    // Set filters
    useEffect(() => {
        devMode ? setFilters(devFilters(devProjects)) : setFilters(designFilters(desProjects));
    }, [devMode]);

    // Set Total (filtered) Projects
    useEffect(() => {
        const featuredProjects = devMode ? devProjects.map(proj => proj) : desProjects.map(proj => proj);
        const hasActiveFilters = activeFilters.length > 0;
        hasActiveFilters ? setProjects(filterProjects(featuredProjects, activeFilters)) : setProjects(featuredProjects);
    }, [activeFilters, devMode]);

    // Set Visible Projects
    useEffect(() => {
        const pageResults = projects.slice(currentPage, currentPage + projectsPerPage);
        if (currentPage === 0) {
            setVisibleProjects(pageResults)
        } else {
            setVisibleProjects((prevResults) => [...prevResults, ...pageResults])
        }
    }, [currentPage, projects]);

    // Show/Hide Load More Button 
    useEffect(() => {
        const totalProjects = projects.length;
        const totalVisibleProjects = visibleProjects.length;
        setHasMoreResults(totalProjects > totalVisibleProjects);
    }, [projects, visibleProjects]);

    const loadMoreProjects = () => {
        setCurrentPage((prevPage) => prevPage + projectsPerPage);
    }

    return (
        <section className={`projects page ${devMode ? 'dev' : 'des'}`} id='projects'>

            <h2>Projects</h2>
            <p className='filter-text'>Filter by:</p>
            <FilterMenu filters={filters} />

            <div className='projects-container'>
                {visibleProjects.map(proj => {
                    if (devMode) {
                        return (<DevProject project={proj} key={proj.key} />)
                    } else {
                        return (<DesProject project={proj} key={proj.key} />);
                    }
                })}
            </div>

            {hasMoreResults && (devMode ? (<DevButton
                className="load-more-btn dev"
                title="Load more projects"
                onClick={loadMoreProjects}
            >Load More</DevButton>) : (<button
                className="load-more-btn des"
                onClick={loadMoreProjects}
            >Load More</button>))}
        </section>
    );
}

export default Projects;