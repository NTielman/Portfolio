// toggles site view from des to dev
export const toggleMode = () => {
    return {
        type: 'TOGGLE-DEV-MODE'
    }
}

export const toggleFilters = (filter) => {
    return {
        type: 'TOGGLE-FILTERS',
        payload: filter,
    }
}

export const resetFilters = () => {
    return {
        type: 'RESET-FILTERS'
    }
}