"use client";

import { createContext, useContext, useState } from "react";

const LimitContext = createContext({
  limit: 0,
  setLimit: (limit: number) => {},
});

export const LimitContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [limit, setLimit] = useState(0);

  return (
    <LimitContext.Provider value={{ limit, setLimit }}>
      {children}
    </LimitContext.Provider>
  );
};

export const useLimitContext = () => useContext(LimitContext);
