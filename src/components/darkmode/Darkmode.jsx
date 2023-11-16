import React, { createContext, useContext, useEffect, useState } from "react";
const DarkModeContext = createContext();

const DarkMode = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("selectedTheme") === "dark"
    );

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light");
    };


    useEffect(() => {
        if (isDarkMode) {
            setDarkMode();
        } else {
            setLightMode();
        }
    }, [isDarkMode]);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode  }}>
        {children}
         </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => useContext(DarkModeContext);

export default DarkMode;
