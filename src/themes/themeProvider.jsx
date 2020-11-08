import React, { useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { DarkTheme, LightTheme } from "./themes";
import { muiDark, muiLight } from "./muiThemes";
import { ThemeContext } from "../context/theme.context";

export const ThemeProvider = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  const { lightTheme } = themeContext;

  return (
    <MuiThemeProvider theme={lightTheme ? muiLight : muiDark}>
      <StyledThemeProvider theme={lightTheme ? LightTheme : DarkTheme}>
        {children}
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};
