import filter from '../functions/filterProjects';

const defaultState = []

const projects = (state = defaultState, action) => {

    switch (action.type) {

        case 'SET-ASSIGNMENT-CHART-DATA':

            const data = action.payload;
            return { ...state, ...data };
        case 'FILTER-PROJECTS':

            const param = action.payload;
            const filteredState = filter(param, state);
            return filteredState;
        default:

            return state;
    }

}

export default projects;