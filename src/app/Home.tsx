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
import SiteLoader from "./Components/SiteLoader";

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
  const preferBasicUI = () => {
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

      <SiteLoader
        display={display}
        pageLoaded={pageLoaded}
        preferBasicUI={preferBasicUI}
        basic={basic}
        limit={limit}
      />
    </div>
  );
};

export default Home;
