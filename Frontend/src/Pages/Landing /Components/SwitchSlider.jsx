import Form from 'react-bootstrap/Form';

const SwitchSlider = ({ isChecked, handleChange }) => {
    return (
        <div>
            {/* <Switch {...label} value={isChecked} onChange={handleChange}/> */}
            <Form.Check
                value={isChecked}
                onChange={handleChange}
                type="switch"
                id="custom-switch"
            />
        </div>
    );
}

export default SwitchSlider;