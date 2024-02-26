import React, { createContext, useContext, useEffect, useState } from "react";

import { ICOLORS, DARK_COLORS } from "../utils/Styles";

export interface IUseTheme {
  colors: ICOLORS;
  updateColors: (colors: ICOLORS) => void;
}

const ThemeContext = createContext<IUseTheme>({
  colors: DARK_COLORS,
  updateColors: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext) as IUseTheme;

interface IProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const [colors, setColors] = useState<ICOLORS>(DARK_COLORS);

  useEffect(() => {
    Object.keys(colors).forEach((key) => {
      document.documentElement.style.setProperty(
        `--${key.toLowerCase().replace(/_/g, "-")}`, // (Like to use PRIMARY_LIGHT color in SCSS/CSS, use color: var(--primary-light))
        colors[key as keyof ICOLORS]
      );
    });
  }, [colors]);

  return (
    <ThemeContext.Provider
      value={{
        colors,
        updateColors: (newColors) => setColors({ ...colors, ...newColors }),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
