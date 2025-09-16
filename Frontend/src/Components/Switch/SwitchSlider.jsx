import Switch from '@mui/material/Switch';

const SwitchSlider = ({isChecked , handleChange}) => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <div>
            <Switch onChange={handleChange} value={isChecked} {...label}/>
        </div>
    );
}

export default SwitchSlider;