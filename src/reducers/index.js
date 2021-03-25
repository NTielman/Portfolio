import { combineReducers } from 'redux';
import devMode from './devMode';
import projects from './projects';

const rootReducer = combineReducers({
    devMode,
    projects
});

export default rootReducer;