import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode } from '../actions';

const ToggleBar = () => {
    const dispatch = useDispatch();
    const isChecked = useSelector(state => state.darkMode);

    return (
        <div>
            <input
                type='checkbox'
                className='toggle-checkbox'
                id='toggle-bar'
                name="toggle-theme"
                value={isChecked}
                onChange={() => {
                    dispatch(toggleMode())
                    document.body.classList.toggle('lightMode')
                }} />
            <label htmlFor='toggle-bar' className='label'>
                <i className="fas fa-pencil-alt"></i>
                <i className="fas fa-code"></i>
                <div className='ball'></div>
            </label>
        </div>

    );
}

export default ToggleBar;