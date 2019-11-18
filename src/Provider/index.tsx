import React from "react";
import { ThemeProvider } from "emotion-theming";

import { Theme } from "../Theme";

interface Props {
  theme: Theme;
}

export const Provider: React.FC<Props> = ({
  theme,
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export { useTheme } from "emotion-theming";
