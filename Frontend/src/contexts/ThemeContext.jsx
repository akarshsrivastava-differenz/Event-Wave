import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const handleTheme = () => {
        setTheme((prevTheme) => {
            return prevTheme === "light" ? "dark" : "light";
        })
    }

    const contextVal = {
        theme,
        handleTheme
    }

    return (
        <ThemeContext.Provider value={contextVal}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('Something went wrong with the theme!');
    }

    return context;
}