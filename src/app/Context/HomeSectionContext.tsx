"use client";

import { createContext, useContext, useState } from "react";

const HomeSectionContext = createContext({
  currentSection: "home",
  setCurrentSection: (currentSection: string) => {},
});

export const HomeSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentSection, setCurrentSection] = useState("home");

  return (
    <HomeSectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </HomeSectionContext.Provider>
  );
};

export const useHomeSectionContext = () => useContext(HomeSectionContext);
