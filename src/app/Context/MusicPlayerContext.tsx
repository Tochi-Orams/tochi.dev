"use client";

import { createContext, useContext, useState } from "react";

const PlayerOpenContext = createContext({
  playerOpen: false,
  setPlayerOpen: (playerOpen: boolean) => {},
});

export const PlayerOpenContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [playerOpen, setPlayerOpen] = useState(false);

  return (
    <PlayerOpenContext.Provider value={{ playerOpen, setPlayerOpen }}>
      {children}
    </PlayerOpenContext.Provider>
  );
};

export const usePlayerOpenContext = () => useContext(PlayerOpenContext);
