import React, { createContext, useContext, useState } from 'react';

// Create Context
export const ThemeContext = createContext();

// Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
