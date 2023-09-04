import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);


const ThemeProvider =  ({ children }: {children: React.ReactNode}) => {
    
    const thema = localStorage.getItem  ("Theme") as string;

   

  const [theme, setTheme] = useState(thema);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
   
  };
  localStorage.setItem ("Theme", theme)
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider,ThemeContext };


