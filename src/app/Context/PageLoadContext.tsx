"use client";

import { createContext, useContext, useState } from "react";

const PageLoadContext = createContext({
  pageLoaded: false,
  setPageLoaded: (pageLoaded: boolean) => {},
});

export const PageLoadContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [pageLoaded, setPageLoaded] = useState(false);

  return (
    <PageLoadContext.Provider value={{ pageLoaded, setPageLoaded }}>
      {children}
    </PageLoadContext.Provider>
  );
};

export const usePageLoadedContext = () => useContext(PageLoadContext);
