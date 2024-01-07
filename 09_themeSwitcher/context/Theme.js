import { createContext, useContext } from "react";

// Create Theme context with some default values(theme).
export const ThemeContext = createContext(
    {
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
    }
)

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
} 

