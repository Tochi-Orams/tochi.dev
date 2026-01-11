"use client";

import { useEffect, useState } from "react";
import { useHomeSectionContext } from "./Context/HomeSectionContext";
import { usePageContext } from "./Context/pageContext";
import { usePageLoadedContext } from "./Context/PageLoadContext";
import { useLoadProgressContext } from "./Context/LoadProgressContext";
import { useSidebarContext } from "./Context/SidebarContext";
import Background from "./Components/Background/Background";
import ContactSection from "./Components/Contact/ContactSection";
import ProjectsSection from "./Components/Projects/ProjectSection";
import AboutSection from "./Components/About/AboutSection";
import HeroSection from "./Components/Hero/Hero";

const Home = () => {
  const { setCurrentSection } = useHomeSectionContext();
  const { currentPage, setCurrentPage } = usePageContext();
  const { pageLoaded, setPageLoaded } = usePageLoadedContext();
  const { loadProgress } = useLoadProgressContext();
  const { setSidebar } = useSidebarContext();

  const [basic, setBasic] = useState(false);
  const [limit, setLimit] = useState(2086);
  const [display, setDisplay] = useState(pageLoaded);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setSidebar(false);
      }
    });
    return () => {
      document.removeEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          setSidebar(false);
        }
      });
    };
  }, []);

  // Progress bar
  useEffect(() => {
    (
      document.querySelector(".loadBar")! as HTMLDivElement
    ).style.transform = `translateX(${
      -1 * (100 - (loadProgress / 190) * 100)
    }%)`;
  }, [loadProgress]);

  // Basic UI
  const basicUI = () => {
    setBasic(true);
    setPageLoaded(true);
  };

  useEffect(() => {
    setCurrentPage("home");

    if (pageLoaded) {
      setTimeout(() => {
        setDisplay(true);
      }, 1000);
    } else {
      setDisplay(false);
    }
  }, [pageLoaded]);

  // One-Section scrolling
  useEffect(() => {
    if (currentPage === "home") {
      window.addEventListener("scroll", changeSec);
      return () => window.removeEventListener("scroll", changeSec);
    }
  });

  const changeSec = () => {
    const height =
      document.querySelector("html")!.scrollHeight - window.innerHeight;
    setLimit(height);

    if (window.scrollY < limit * 0.25) {
      setCurrentSection("home");
    } else if (window.scrollY >= limit * 0.25 && window.scrollY < limit * 0.5) {
      setCurrentSection("about");
    } else if (window.scrollY >= limit * 0.5 && window.scrollY < limit * 0.75) {
      setCurrentSection("projects");
    } else if (window.scrollY >= limit * 0.75) {
      setCurrentSection("contact");
    }
  };

  return (
    <div>
      <div
        id="home"
        className={`duration-1000 ease-out relative z-10 overflow-clip ${
          pageLoaded ? "block" : "hidden"
        } ${
          display
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <div
        className={`absolute top-0 left-0 z-[5] h-screen w-full bg-black duration-[0.85s] ease-in ${
          display ? "opacity-0 blur-sm" : "opacity-100 blur-0"
        }`}
      >
        <img
          src="/Icon.png"
          alt="logo"
          className={`pointer-events-none xm:h-48 h-28 object-contain duration-1000 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            display ? "scale-[0.34]" : "scale-100"
          }`}
        />

        <div className="absolute left-1/2 top-[65%] xm:w-[25%] w-[40%] -translate-x-1/2">
          <div className="w-full h-[6px] bg-white/30 overflow-hidden rounded-sm">
            <div
              className={`loadBar w-full h-full bg-white/60 rounded-full -translate-x-[100%]`}
            />
          </div>
        </div>

        <div
          className="w-200px z-50 absolute top-[80%] left-1/2 -translate-x-1/2 p-4 glass cursor-pointer duration-300 hover:bg-white/45"
          onClick={basicUI}
        >
          <p className="text-center">
            Switch to basic version for faster loading
          </p>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-[100vw] h-screen ease-in-out ${
          pageLoaded ? "opacity-100" : "opacity-0"
        } ${display ? "duration-0" : "duration-1000"}`}
      >
        {basic ? (
          <div className="absolute top-0 left-0 h-[100vh] w-[100vw] -z-10 pointer-events-none">
            <img
              src="/Sequence/0010.jpg"
              alt="bg"
              className="h-full w-full object-cover pointer-events-none opacity-40"
            />
          </div>
        ) : (
          <div>
            <Background limit={limit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
