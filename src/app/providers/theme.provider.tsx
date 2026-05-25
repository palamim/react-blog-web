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
  const [theme, setTheme] = useState(Theme.Light);

  const handleTheme = () => {
    setTheme((prev) => (prev === Theme.Light ? Theme.Dark : Theme.Light));
  };

  return <ThemeContext value={{ theme, handleTheme }}>{children}</ThemeContext>;
};
