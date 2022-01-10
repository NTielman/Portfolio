import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMode, resetFilters } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const ToggleBar = () => {
    const dispatch = useDispatch();
    const isChecked = useSelector(state => state.devMode);

    return (
        <div
            role="button" title="toggle between developer and designer portfolio's"
            className='toggle-bar-container'>
            <input
                type='checkbox'
                id='toggle-checkbox'
                className='hide'
                value={isChecked}
                onChange={() => {
                    document.body.classList.toggle('designMode')
                    dispatch(resetFilters())
                    dispatch(toggleMode())
                }} />
            <label htmlFor='toggle-checkbox' className='toggle-bar'>
                <FontAwesomeIcon icon={faCode} />
                <FontAwesomeIcon icon={faPencilAlt} />
                <div className='ball'></div>
            </label>
        </div>

    );
}

export default ToggleBar;