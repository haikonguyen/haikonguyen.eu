import React, { createContext, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const initialState = {
  showOnScroll: false
};

export const UiContext = createContext(initialState);

const UiContextProvider = props => {
  const { children } = props;
  const [showOnScroll, setShowOnScroll] = useState(false);

  useScrollPosition(({ currPos }) => {
    currPos.y < -150 ? setShowOnScroll(true) : setShowOnScroll(false);
  });

  return (
    <UiContext.Provider value={{ showOnScroll }}>{children}</UiContext.Provider>
  );
};

export default UiContextProvider;