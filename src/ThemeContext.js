import { useState, createContext } from "react";

const ThemeContext = createContext({})

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark')

    const handleToggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = {
        theme,
        handleToggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}