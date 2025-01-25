"use client";

import { createContext, useContext, useState } from "react";

const SidebarContext = createContext({
  sidebar: false,
  setSidebar: (sidebar: boolean) => {},
});

export const SidebarContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
