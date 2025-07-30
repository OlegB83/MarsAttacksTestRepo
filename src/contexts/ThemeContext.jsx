import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme preference or default to 'dark' to match current Mars theme
    const savedTheme = localStorage.getItem('mars-theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('mars-theme', theme);
    
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update CSS custom properties based on theme
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--bg-primary', '#f5f5f5');
      root.style.setProperty('--bg-secondary', '#ffffff');
      root.style.setProperty('--bg-tertiary', '#e8e8e8');
      root.style.setProperty('--text-primary', '#2c2c2c');
      root.style.setProperty('--text-secondary', '#4a4a4a');
      root.style.setProperty('--text-accent', '#8B0000');
      root.style.setProperty('--mars-red', '#CD853F');
      root.style.setProperty('--mars-green', '#228B22');
      root.style.setProperty('--mars-yellow', '#DAA520');
      root.style.setProperty('--nav-bg', 'rgba(255, 255, 255, 0.95)');
      root.style.setProperty('--card-bg', 'linear-gradient(135deg, #fff8dc 0%, #f5deb3 100%)');
      root.style.setProperty('--border-color', '#cd853f');
      root.style.setProperty('--shadow-color', 'rgba(139, 0, 0, 0.3)');
      root.style.setProperty('--glow-color', '#cd853f');
    } else {
      root.style.setProperty('--bg-primary', '#000000');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
      root.style.setProperty('--bg-tertiary', '#2a2a2a');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#cccccc');
      root.style.setProperty('--text-accent', '#ffff00');
      root.style.setProperty('--mars-red', '#ff0000');
      root.style.setProperty('--mars-green', '#00ff00');
      root.style.setProperty('--mars-yellow', '#ffff00');
      root.style.setProperty('--nav-bg', 'rgba(0, 0, 0, 0.95)');
      root.style.setProperty('--card-bg', 'linear-gradient(135deg, #001100 0%, #003300 100%)');
      root.style.setProperty('--border-color', '#00ff00');
      root.style.setProperty('--shadow-color', 'rgba(0, 255, 0, 0.3)');
      root.style.setProperty('--glow-color', '#00ff00');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme,
    isLight: theme === 'light',
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};