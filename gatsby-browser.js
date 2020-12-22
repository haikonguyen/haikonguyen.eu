import React from "react";
import { I18nextProvider } from "react-i18next";
import ThemeContextProvider from "./src/context/theme.context";
import UiContextProvider from "./src/context/ui.context";
import { ThemeProvider } from "./src/themes/themeProvider";
import { i18n } from "./src/i18n";

export const wrapRootElement = ({ element }) => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ThemeContextProvider>
      <UiContextProvider>
        <ThemeProvider>
          <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
        </ThemeProvider>
      </UiContextProvider>
    </ThemeContextProvider>
  );
};
