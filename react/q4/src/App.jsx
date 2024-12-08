// App.js
import React from 'react';
import { ThemeProvider } from './components/context';
import ThemeSwitcher from './components/theme';

const App = () => (
  <ThemeProvider>
    <div>
      <h1>Theme Switcher App</h1>
      <ThemeSwitcher />
    </div>
  </ThemeProvider>
);

export default App;