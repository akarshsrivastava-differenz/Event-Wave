import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const SwitchSlider = ({isChecked , handleChange}) => {
    return (
        <div>
            <Switch {...label} value={isChecked} onChange={handleChange}/>
        </div>
    );
}

export default SwitchSlider;