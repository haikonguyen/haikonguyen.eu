import React from 'react';
import ThemeContextProvider from './src/context/theme.context';

export const wrapRootElement = ({ element }) => {
  return <ThemeContextProvider>{element}</ThemeContextProvider>;
};
