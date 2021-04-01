const defaultFilters = [];

const activeFilters = (state = defaultFilters, action) => {

    switch (action.type) {

        case 'TOGGLE-FILTER':
            let filters = [...state];

            const { value, checked } = action.payload;
            if (checked) {
                filters.push(value);
            } else {
                filters = filters.filter(val => val !== value);
            }

            return filters;
        case 'RESET-FILTERS':

            return defaultFilters;
        default:

            return state;
    }

}

export default activeFilters;