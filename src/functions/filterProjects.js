const filterProjects = (projects, filters) => {

    const filteredDesignProjects = projects.filter(project => project.typeOfWork && filters.includes(project.typeOfWork));

    const filteredDevProjects = projects.filter(project => project.tools && project.tools.some(tool => filters.includes(tool)));

    if (filteredDesignProjects.length > 0) {
        return filteredDesignProjects
    } else {
        return filteredDevProjects
    }

};

export default filterProjects;