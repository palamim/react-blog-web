import { createContext, useContext, useState, type ReactNode } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeContextType {
  theme: Theme;
  handleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Light,
  handleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('userTheme') as Theme) || Theme.Light,
  );

  const handleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    localStorage.setItem('userTheme', newTheme);
    setTheme(newTheme);
  };

  return <ThemeContext value={{ theme, handleTheme }}>{children}</ThemeContext>;
};
