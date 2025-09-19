import { useTheme } from "../../contexts/ThemeContext";

const Events = ()=>{
    const {theme , handleTheme} = useTheme(); 

    console.log(theme);
    return (
        <>
        <h1>This is events!</h1>
        <h3>{theme}</h3>
        <button onClick={handleTheme}>Change theme</button>
        </>
    )
}

export default Events;

