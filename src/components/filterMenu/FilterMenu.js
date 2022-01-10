import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleProjectFilter } from '../../actions';
import DevButton from '../button/DevButton';

const FilterMenu = ({ filters }) => {

    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.activeFilters);
    const devMode = useSelector(state => state.devMode);

    return (
        <ul className={`filter-menu ${devMode ? "dev" : "des"}`}>
            {filters.map(filter => {
                return (
                    <li key={filter}>
                        <input
                            type="checkbox"
                            name="filter"
                            className="hide"
                            title={filter}
                            checked={activeFilters.includes(filter)}
                            onChange={(event) => dispatch(toggleProjectFilter(event.target))}
                            id={filter}
                            value={filter}>
                        </input>
                        {devMode ? (
                            <DevButton className="label" title={filter}>
                                <label
                                    htmlFor={filter}>
                                    {filter}
                                </label>
                            </DevButton>
                        ) : (
                            <label
                                className="label"
                                htmlFor={filter}>
                                {filter}
                            </label>
                        )}
                    </li>);
            })}
        </ul>
    );
}

export default FilterMenu;