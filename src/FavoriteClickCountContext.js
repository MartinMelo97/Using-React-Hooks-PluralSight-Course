import { createContext, useContext, useMemo } from 'react';
export const FavoriteClickCounterContext = createContext();

import { GlobalContext } from './GlobalState';

export const FavoriteClickCounterProvider = ({ children }) => {
  const {
    incrementFavoriteClickCount
  } = useContext(GlobalContext);

  const provider = useMemo(() => {
    return { incrementFavoriteClickCount };
  }, []);

  return (
    <FavoriteClickCounterContext.Provider
      value={provider}
    >
      {children}
    </FavoriteClickCounterContext.Provider>
  );
};