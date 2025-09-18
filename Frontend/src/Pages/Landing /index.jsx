import EventList from "./Components/EventList";
import SwitchSlider from "./Components/SwitchSlider";
import { useState } from "react";

const Landing = () => {

    const [isChecked , setIsChecked] = useState(false);

    const handleChange = ()=>{
        setIsChecked(!isChecked);
    }

    return (
        <>
            <SwitchSlider isChecked={isChecked} handleChange={handleChange}/>
            <EventList isCard={isChecked}/>
        </>
    );
}

export default Landing;