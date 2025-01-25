"use client";

import { createContext, useContext, useState } from "react";

const NavOpenContext = createContext({
  navOpen: false,
  setNavOpen: (navOpen: boolean) => {},
});

export const NavOpenContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavOpenContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavOpenContext.Provider>
  );
};

export const useNavOpenContext = () => useContext(NavOpenContext);
