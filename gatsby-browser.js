import React from 'react';
import ThemeContextProvider from './src/context/theme.context';
import UiContextProvider from './src/context/ui.context';

export const wrapRootElement = ({ element }) => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ThemeContextProvider>
      <UiContextProvider>{element}</UiContextProvider>
    </ThemeContextProvider>
  );
};
