import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFilters } from '../actions';

const FilterMenu = (props) => {
    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.activeFilters);

    return (
        <ul className="filter-menu">
            {props.filters.map(filter => {
                return (
                    <li key={filter}>
                        <input
                            type="checkbox"
                            name="filter"
                            className="hide"
                            checked={activeFilters.includes(filter)}
                            onChange={(event) => dispatch(toggleFilters(event.target))}
                            id={filter}
                            value={filter}></input>
                        <label htmlFor={filter}>{filter}</label>
                    </li>);
            })}
        </ul>
    );
}

export default FilterMenu;