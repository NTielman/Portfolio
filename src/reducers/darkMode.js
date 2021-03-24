const darkMode = (state = true, action) => {

    switch (action.type) {

        case 'TOGGLE-DARK-MODE':

            const newState = !state;
            return newState;
        default:

            return state;
    }

}

export default darkMode;