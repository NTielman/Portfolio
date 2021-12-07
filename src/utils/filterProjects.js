const filterProjects = (projects, filters) => {

    const filteredDesignProjects = projects.filter(project => project.typeOfWork && filters.includes(project.typeOfWork));
    const filteredDevProjects = projects.filter(project => project.tools && project.tools.some(tool => filters.includes(tool)));

    if (filteredDesignProjects.length > 0) {
        return filteredDesignProjects
    } else {
        return filteredDevProjects
    }

};

export const devFilters = (devProjects) => {

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

export const designFilters = (desProjects) => {

    const filters = [];
    desProjects.forEach(project => {
        const typeOfWork = project.typeOfWork;
        if (!filters.includes(typeOfWork)) {
            filters.push(typeOfWork);
        }
    })
    return filters;
    
};

export default filterProjects;