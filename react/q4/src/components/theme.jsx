// ThemeSwitcher.js
import React, { useContext } from 'react';
import { ThemeContext } from './context';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        background: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer"
      }}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeSwitcher;


