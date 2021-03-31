import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode, resetFilters } from '../../actions';

const ToggleBar = () => {
    const dispatch = useDispatch();
    const isChecked = useSelector(state => state.devMode);

    return (
        <div className='toggle-bar-container'>
            <input
                type='checkbox'
                id='toggle-checkbox'
                value={isChecked}
                onChange={() => {
                    document.body.classList.toggle('designMode')
                    dispatch(resetFilters())
                    dispatch(toggleMode())
                }} />
            <label htmlFor='toggle-checkbox' className='toggle-bar'>
                <i className="fas fa-pencil-alt"></i>
                <i className="fas fa-code"></i>
                <div className='ball'></div>
            </label>
        </div>

    );
}

export default ToggleBar;