"use client";

import { createContext, useContext, useState } from "react";

const LoadProgressContext = createContext({
  loadProgress: 0,
  setLoadProgress: (loadProgress: number) => {},
});

export const LoadProgressContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loadProgress, setLoadProgress] = useState(0);

  return (
    <LoadProgressContext.Provider value={{ loadProgress, setLoadProgress }}>
      {children}
    </LoadProgressContext.Provider>
  );
};

export const useLoadProgressContext = () => useContext(LoadProgressContext);
