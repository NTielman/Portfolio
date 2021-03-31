import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleProjectFilter } from '../../actions';

const FilterMenu = (props) => {
    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.activeFilters);
    const getMode = useSelector(state => state.devMode);

    const dotRef = useRef([]);

    return (
        <ul className={getMode ? "filter-menu dev" : "filter-menu des"}>
            {props.filters.map((filter, index) => {
                return (
                    <li key={filter}
                        id={index}>
                        <input
                            type="checkbox"
                            name="filter"
                            className="hide"
                            checked={activeFilters.includes(filter)}
                            onChange={(event) => dispatch(toggleProjectFilter(event.target))}
                            id={filter}
                            value={filter}></input>
                        <label htmlFor={filter} id={index}
                            onMouseEnter={(event) => {
                                if (getMode) {
                                    let labelRect = event.target.getBoundingClientRect();
                                    let x = event.pageX - labelRect.x;
                                    let y = event.pageY - labelRect.y;
                                    const indexNum = event.target.id;
                                    dotRef.current[indexNum].style.left = x + 'px';
                                    dotRef.current[indexNum].style.top = y + 'px';
                                }
                            }}
                            onMouseLeave={(event) => {
                                if (getMode) {
                                    let labelRect = event.target.getBoundingClientRect();
                                    let x = event.pageX - labelRect.x;
                                    let y = event.pageY - labelRect.y;
                                    const indexNum = event.target.id;
                                    dotRef.current[indexNum].style.left = x + 'px';
                                    dotRef.current[indexNum].style.top = y + 'px';
                                }
                            }}>
                            {getMode && (<span className='dot' id={index} ref={el => dotRef.current[index] = el}></span>)}{filter}</label>
                    </li>);
            })}
        </ul>
    );
}

export default FilterMenu;