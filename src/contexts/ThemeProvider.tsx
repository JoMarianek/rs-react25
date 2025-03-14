import { useState } from 'react';
import { ReactNode } from 'react';

import { ThemeContext } from './ThemeContext';
import styles from './ThemeProvider.module.css';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-theme={theme} className={styles.themeWrapper}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
