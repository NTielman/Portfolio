import { combineReducers } from 'redux';
import darkMode from './darkMode';
import projects from './projects';

const rootReducer = combineReducers({
    darkMode,
    projects
});

export default rootReducer;