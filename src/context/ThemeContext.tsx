import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Theme = 'light' | 'dark';

type ThemeContextValue = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('portfolio-theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return 'light';
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolio-theme', nextTheme);
    }
  };

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    root.dataset.theme = theme;
    root.classList.toggle('theme-dark', theme === 'dark');
    root.classList.toggle('theme-light', theme === 'light');
    body.classList.toggle('theme-dark', theme === 'dark');
    body.classList.toggle('theme-light', theme === 'light');
  }, [theme]);

  const value = useMemo(
    () => ({ theme, isDark: theme === 'dark', toggleTheme, setTheme }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return context;
}
