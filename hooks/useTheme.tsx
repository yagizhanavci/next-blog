import { ThemeContext } from "@/contexts";
import { useContext } from "react";

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme)
    throw new Error(
      "ThemeContext can not be used without wrapping the component that needs theme with ThemeProvider!",
    );

  return theme;
};
