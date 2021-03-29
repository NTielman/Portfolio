import { combineReducers } from 'redux';
import devMode from './devMode';
import activeFilters from './activeFilters';

const rootReducer = combineReducers({
    devMode,
    activeFilters
});

export default rootReducer;