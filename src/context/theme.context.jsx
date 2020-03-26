import React, { createContext } from 'react';
import usePersistedState from '../utils/usePersistedState';

const initialState = {
  lightTheme: false,
  themeToggler: () => {}
};

export const ThemeContext = createContext(initialState);

const ThemeContextProvider = props => {
  const { children } = props;
  const [lightTheme, setLightTheme] = usePersistedState(
    'persisted-theme',
    false
  );

  const themeToggler = () => {
    !lightTheme ? setLightTheme(true) : setLightTheme(false);
  };

  return (
    <ThemeContext.Provider value={{ lightTheme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
