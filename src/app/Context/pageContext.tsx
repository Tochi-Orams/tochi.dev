"use client";

import { createContext, useContext, useState } from "react";

const PageContext = createContext({
  currentPage: "home",
  setCurrentPage: (currentPage: string) => {},
});

export const PageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
