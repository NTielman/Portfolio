// toggles site view from designer to dev
export const toggleMode = () => {
    return {
        type: 'TOGGLE-DEV-MODE'
    }
}

// toggle active filters (filters selected by user)
export const toggleProjectFilter = (filter) => {
    return {
        type: 'TOGGLE-FILTER',
        payload: filter,
    }
}

// removes all active filters
export const resetFilters = () => {
    return {
        type: 'RESET-FILTERS'
    }
}