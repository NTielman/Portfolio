import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleProjectFilter } from '../../actions';

const FilterMenu = (props) => {

    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.activeFilters);
    const devMode = useSelector(state => state.devMode);
    const devCircleRef = useRef([]);

    return (
        <ul className={devMode ? "filter-menu dev" : "filter-menu des"}>
            {props.filters.map((filter, index) => {
                return (
                    <li key={filter}
                        id={index}>
                        <input
                            type="checkbox"
                            name="filter"
                            className="hide"
                            title={filter}
                            checked={activeFilters.includes(filter)}
                            onChange={(event) => dispatch(toggleProjectFilter(event.target))}
                            id={filter}
                            value={filter}></input>
                        <label htmlFor={filter} id={index}
                            onMouseEnter={(event) => {
                                if (devMode) {
                                    const labelRect = event.target.getBoundingClientRect();
                                    const x = event.pageX - labelRect.x;
                                    const y = event.pageY - labelRect.y;
                                    const indexNum = event.target.id;
                                    devCircleRef.current[indexNum].style.left = x + 'px';
                                    devCircleRef.current[indexNum].style.top = y + 'px';
                                }
                            }}
                            onMouseLeave={(event) => {
                                if (devMode) {
                                    const labelRect = event.target.getBoundingClientRect();
                                    const x = event.pageX - labelRect.x;
                                    const y = event.pageY - labelRect.y;
                                    const indexNum = event.target.id;
                                    devCircleRef.current[indexNum].style.left = x + 'px';
                                    devCircleRef.current[indexNum].style.top = y + 'px';
                                }
                            }}>

                            {devMode && (<span className='circle' id={index} ref={el => devCircleRef.current[index] = el}></span>)}

                            {filter}
                        </label>
                    </li>);
            })}
        </ul>
    );
}

export default FilterMenu;