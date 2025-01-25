"use client";

import { useEffect, useState } from "react";
import { useSidebarContext } from "../Context/SidebarContext";
import { usePageContext } from "../Context/pageContext";
import { useHomeSectionContext } from "../Context/HomeSectionContext";
import { usePageLoadedContext } from "../Context/PageLoadContext";
import { NavArrow, navPages } from "./NavComponents";

const Nav = () => {
  const [hover, setHover] = useState(true);
  const [slide, setSlide] = useState("translate-x-0");
  const [peek, setPeek] = useState(false);

  const { sidebar } = useSidebarContext();
  const { currentPage } = usePageContext();
  const { currentSection } = useHomeSectionContext();
  const { pageLoaded } = usePageLoadedContext();

  const navigate = (section: string) => {
    const id = `${section}-section`;
    const scrollSec = document.getElementById(id);
    if (scrollSec) {
      scrollSec.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (currentSection !== "home") {
      setHover(true);
    }

    if (peek) {
      setSlide("translate-x-0");
    } else if (currentSection === "about") {
      setSlide("-translate-x-[12rem]");
    } else if (currentSection === "projects") {
      setSlide("-translate-x-[24rem]");
    } else if (currentSection === "contact") {
      setSlide("-translate-x-[36rem]");
    } else {
      setSlide("translate-x-0");
    }
  }, [currentSection, peek]);

  return (
    <div
      className={`w-full pointer-events-none fixed top-[2.5vh] left-1/2 -translate-x-1/2 justify-center gap-8 items-center duration-1000 delay-[1.3s] z-40 ${
        currentSection === "home"
          ? pageLoaded
            ? "opacity-100"
            : "opacity-0 "
          : "opacity-100"
      } ${sidebar ? "hidden" : "lg:flex hidden"} ${
        currentPage === "home" ? "" : "!hidden"
      }`}
    >
      <NavArrow direction="previous" setPeek={setPeek} />

      <nav
        className={`w-auto !pointer-events-auto max-w-[800px] duration-300 rounded-full overflow-clip ${
          currentSection !== "home" && !peek && "!max-w-[154px]"
        } ${
          hover ? "bg-white/30 backdrop-blur-md" : "bg-white/0 backdrop-blur-0"
        }`}
        onMouseEnter={
          currentSection === "home"
            ? () => {
                setHover(true);
                setPeek(true);
              }
            : () => setPeek(true)
        }
        onMouseLeave={
          currentSection === "home"
            ? () => {
                setHover(false);
                setPeek(false);
              }
            : () => setPeek(false)
        }
      >
        <div
          className={`flex gap-12 items-center duration-300 p-[5px] w-fit ${slide}`}
        >
          {navPages.map((page, i) => (
            <a
              key={i}
              id={page.id}
              href={`#${page.id}`}
              className={`rounded-full py-3 duration-300 ${
                hover && currentSection === page.id
                  ? "bg-white/30"
                  : "bg-white/0 hover:bg-white/15 focus:bg-white/20"
              }`}
              onClick={() => {
                navigate(page.id);
              }}
              onFocus={() => setPeek(true)}
              onBlur={() => setPeek(false)}
            >
              <div className="flex cursor-pointer duration-300 !w-36">
                <p className="font-normal mx-auto text-nowrap">{page.text}</p>
              </div>
            </a>
          ))}
        </div>
      </nav>

      <NavArrow direction="next" setPeek={setPeek} />
    </div>
  );
};

export default Nav;
