"use client";

import { useState } from "react";
import { useHomeSectionContext } from "../Context/HomeSectionContext";
import { useSidebarContext } from "../Context/SidebarContext";
import { usePageLoadedContext } from "../Context/PageLoadContext";
import { usePageContext } from "../Context/pageContext";
import { navPages } from "./NavComponents";

const MobileNav = () => {
  const [hover, setHover] = useState(false);

  const { currentSection, setCurrentSection } = useHomeSectionContext();
  const { sidebar } = useSidebarContext();
  const { pageLoaded } = usePageLoadedContext();
  const { currentPage } = usePageContext();

  const navigate = (section: string) => {
    const id = `${section}-section`;
    const scrollSec = document.getElementById(id);
    if (scrollSec) {
      scrollSec.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setCurrentSection(section);
  };

  const doNav = (x: string) => {
    setTimeout(() => {
      navigate(x);
    }, 100);
    setHover(false);
  };

  return (
    <div
      className={`fixed z-30 xm:top-[21.5px] sm:top-7 top-6 lg:right-[100px] sm:right-10 right-3 duration-1000 delay-[2s] lg:!hidden block ${
        pageLoaded
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } ${currentPage === "home" ? "" : "!hidden"}`}
    >
      <nav
        className={`xm:h-16 flex flex-row-reverse items-center xm:rounded-[5rem] rounded-[1.75rem] z-[100] duration-700 ease-out w-auto overflow-hidden ${
          hover
            ? "p-2 mx:pl-20 pl-14 max-w-[600px] xm:bg-white/30 bg-white/40 xm:backdrop-blur-0 backdrop-blur-md md:gap-10 xm:gap-8"
            : "px-2 max-w-16 bg-white/0 gap-1"
        }
        ${sidebar ? "opacity-0 pointer-events-none !duration-300" : ""}`}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          setHover(!hover);
        }}
      >
        <button
          role="menu"
          aria-label="Open navigation menu"
          tabIndex={0}
          className="menu h-12 aspect-square mr-0 xm:mb-0 mb-auto  xm:bg-white/30 bg-white/20  flex flex-col justify-around rounded-full px-2 py-[10px] backdrop-blur-md cursor-pointer"
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </button>
        <div
          className={`flex xm:flex-row flex-col items-center duration-700 ease-out md:ml-4 md:mr-0 mr-6 h-auto ${
            hover
              ? "xm:gap-9 gap-3 opacity-100 pointer-events-auto max-h-80"
              : "gap-1 opacity-0 pointer-events-none max-h-0"
          }`}
        >
          {navPages.map((page, i) => (
            <a
              key={i}
              href={`#${page.id}`}
              onClick={() => doNav(page.id)}
              className="group duration-300 mt-1"
              onFocus={() => setHover(true)}
              onBlur={() => setHover(false)}
            >
              <p className="text-lg font-medium text-nowrap">{page.text}</p>
              <div className="h-1">
                <div
                  className={`pointer-events-none rounded-full bg-white mt-1 mx-auto duration-300 ${
                    currentSection === page.id
                      ? "h-[1px] w-8 opacity-100 group-hover:h-1 group-hover:w-1 group-focus:h-1 group-focus:w-1"
                      : "h-1 w-1 group-hover:opacity-100 group-focus:opacity-100 opacity-0"
                  }`}
                />
              </div>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
