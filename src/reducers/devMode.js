const devMode = (state = true, action) => {

    switch (action.type) {

        case 'TOGGLE-DEV-MODE':

            const newState = !state;
            return newState;
        default:

            return state;
    }

}

export default devMode;