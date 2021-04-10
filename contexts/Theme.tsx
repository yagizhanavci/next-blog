import React, { createContext, useEffect } from "react";

interface IThemeContext {
  isDarkTheme: boolean;
  onToggle: (v: boolean) => void;
}

const defaultValue: IThemeContext = {
  isDarkTheme: false,
  onToggle: () => {},
};

export const ThemeContext = createContext<IThemeContext>(defaultValue);

export const ThemeProvider: React.FC = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = React.useState<boolean>(false);

  const onToggle = (v: boolean) => {
    setDarkTheme(v);
    if (v) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "default");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      onToggle(true);
    } else {
      onToggle(false);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, onToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
