import React, { createContext, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const initialState = {
  showOnScroll: false,
  isNotHomePage: () => {},
};

export const UiContext = createContext(initialState);

const UiContextProvider = (props) => {
  const { children } = props;
  const [showOnScroll, setShowOnScroll] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useScrollPosition(({ currPos }) => {
    currPos.y < -150 ? setShowOnScroll(true) : setShowOnScroll(false);
  });

  const isHomePage = (pathName) => {
    if (pathName === '/') {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  };

  return (
    <UiContext.Provider value={{ showOnScroll, isHome, isHomePage }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
