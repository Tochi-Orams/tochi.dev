"use client";

import { faArrowDown, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useHomeSectionContext } from "../../Context/HomeSectionContext";
import { useSidebarContext } from "../../Context/SidebarContext";
import { usePageLoadedContext } from "../../Context/PageLoadContext";
import { usePageContext } from "../../Context/pageContext";
import { usePlayerOpenContext } from "../../Context/MusicPlayerContext";
import Sidebar from "../Sidebar";

const HeroSection = () => {
  const { currentPage } = usePageContext();
  const { currentSection, setCurrentSection } = useHomeSectionContext();
  const { pageLoaded } = usePageLoadedContext();
  const { setSidebar } = useSidebarContext();
  const { setPlayerOpen } = usePlayerOpenContext();

  const [showArrow, setShowArrow] = useState(false);
  const [display, setDisplay] = useState(pageLoaded);

  useEffect(() => {
    if (pageLoaded) {
      setTimeout(() => {
        setDisplay(true);
      }, 1000);
    } else {
      setDisplay(false);
    }
  }, [pageLoaded]);

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

  return (
    <section
      id="home-section"
      className={`section-padding h-screen flex flex-col pb-[10vh] justify-end items-center overflow-hidden z-10 duration-700 ease-out ${
        currentPage === "home"
          ? display
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-[2] opacity-0 pointer-events-none"
          : "scale-100 opacity-100 pointer-events-auto"
      }`}
    >
      {/* boxes */}
      <div className="lg:h-[45%] md:h-[55%] h-[75%] flex lg:flex-row flex-col justify-center xl:gap-20 gap-8">
        <div className="lg:!px-12 p-6 bg-white/30 backdrop-blur-md rounded-3xl lg:w-3/5 w-fit lg:text-left text-center flex gap-6 justify-between">
          <div className="flex flex-col h-full justify-around gap-4">
            <button
              type="button"
              aria-label="Open external links menu"
              title="Open external links menu"
              className="flex flex-col items-center justify-center cursor-pointer w-8 aspect-square rounded-full bg-white/15 duration-300 hover:bg-white/30 absolute right-6 top-6"
              onClick={() => setSidebar(true)}
              onFocus={() => setPlayerOpen(false)}
            >
              <FontAwesomeIcon
                icon={faEllipsisV}
                className="h-5 object-contain"
              />
            </button>

            <p className="h4Size font-medium">Hey! I'm</p>

            <h1 className="xl:h1Size h2Size">Tochi Oramasionwu</h1>
            <p>
              I'm a Full-Stack Engineer who's passionate about transforming
              creative ideas into seamless digital experiences.
            </p>
          </div>
        </div>

        {currentSection !== "contact" && <Sidebar />}

        <button
          type="button"
          role="link"
          className="lg:w-1/5 w-fit lg:mx-0 mx-auto lg:p-12 px-12 py-4 bg-white/30 backdrop-blur-md rounded-3xl flex flex-col justify-center text-center cursor-pointer"
          onMouseEnter={() => setShowArrow(true)}
          onMouseLeave={() => setShowArrow(false)}
          onFocus={() => {
            setShowArrow(true);
            setSidebar(false);
          }}
          onBlur={() => setShowArrow(false)}
          onClick={() => navigate("projects")}
        >
          <div
            className="
               overflow-hidden"
          >
            <p className="h3Size font-medium mt-6">See My Work</p>
            <FontAwesomeIcon
              icon={faArrowDown}
              className={`mt-8 duration-300 ${
                showArrow ? "opacity-100 lg:h-10 h-6" : "opacity-0 h-0"
              }`}
            />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
