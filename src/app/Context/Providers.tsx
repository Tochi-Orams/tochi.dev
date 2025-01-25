import { FC, ReactNode } from "react";
import { PageContextProvider } from "./pageContext";
import { SidebarContextProvider } from "./SidebarContext";
import { HomeSectionContextProvider } from "./HomeSectionContext";
import { NavOpenContextProvider } from "./NavOpenContext";
import { PageLoadContextProvider } from "./PageLoadContext";
import { LimitContextProvider } from "./LimitContext";
import { LoadProgressContextProvider } from "./LoadProgressContext";
import { PlayerOpenContextProvider } from "./MusicPlayerContext";

interface props {
  children: ReactNode;
}
const Providers: FC<props> = ({ children }) => {
  return (
    <PageContextProvider>
      <SidebarContextProvider>
        <HomeSectionContextProvider>
          <NavOpenContextProvider>
            <PageLoadContextProvider>
              <LimitContextProvider>
                <LoadProgressContextProvider>
                  <PlayerOpenContextProvider>
                    {children}
                  </PlayerOpenContextProvider>
                </LoadProgressContextProvider>
              </LimitContextProvider>
            </PageLoadContextProvider>
          </NavOpenContextProvider>
        </HomeSectionContextProvider>
      </SidebarContextProvider>
    </PageContextProvider>
  );
};

export default Providers;
