import React from 'react';
import Home from './pages/Home';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <Home />
    </ThemeProvider>
  );
}

export default App;