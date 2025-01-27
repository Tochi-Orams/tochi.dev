"use client";

import { useEffect, useState } from "react";

import { allProjects, mobileProjects, webProjects } from "./ProjectConstants";
import ProjectType from "./ProjectType";
import ProjectCarousel from "./ProjectCarousel";
import Link from "next/link";

const ProjectsSection = () => {
  const [openSection, setOpenSection] = useState<"web" | "mobile" | "">("");
  const [allProj, setAllProj] = useState(false);
  const [inDOM, setInDOM] = useState(false);
  const [visible, setVisible] = useState(false);
  const [VW, setVW] = useState(1000);

  useEffect(() => {
    if (VW < 976) {
      setAllProj(true);
    } else {
      setAllProj(false);
    }
  }, [VW]);

  useEffect(() => {
    if (allProj) {
      setInDOM(true);
      setTimeout(() => {
        setVisible(true);
      }, 100);
    } else {
      setVisible(false);
      setTimeout(() => {
        setInDOM(false);
      }, 1000);
    }
  }, [allProj]);

  useEffect(() => {
    setVW(window.innerWidth);
    window.addEventListener("resize", () => setVW(window.innerWidth));
  }, []);

  return (
    <section
      id="projects-section"
      className="w-full h-screen overflow-hidden relative z-30"
    >
      <button
        type="button"
        className={`glass w-fit md:absolute py-3 px-6 hover:bg-white/60 cursor-pointer duration-500 z-[1000] text-nowrap left-1/2 ${
          openSection === "web"
            ? "-translate-x-[calc(50%-36vw)] top-52"
            : openSection === "mobile"
            ? "-translate-x-[calc(50%+36vw)] top-52"
            : "-translate-x-1/2 top-36"
        } ${
          allProj
            ? "scale-[25%] opacity-0 pointer-events-none"
            : "scale-100 opacity-100 pointer-events-auto"
        }`}
        onClick={() => setAllProj(true)}
      >
        <p>All Projects</p>
      </button>

      <div
        id="featured"
        className={`h-full w-full duration-1000 ease-in-out flex flex-col pt-28 relative ${
          allProj
            ? "scale-[25%] opacity-0 pointer-events-none"
            : "scale-100 opacity-100 pointer-events-auto"
        }`}
      >
        <div className="absolute top-10 flex w-full h-full py-20 justify-center gap-10 items-center">
          <ProjectType
            title="Web"
            openSection={openSection}
            setOpenSection={setOpenSection}
            sec="web"
          >
            <ProjectCarousel projects={webProjects} sec="web" />
          </ProjectType>
          <ProjectType
            title="Mobile"
            openSection={openSection}
            setOpenSection={setOpenSection}
            sec="mobile"
          >
            <ProjectCarousel projects={mobileProjects} sec="mobile" />
          </ProjectType>
        </div>
      </div>

      <div
        id="all projects"
        className={`absolute lg:top-0 top-14 lg:-translate-y-[100%] left-0 h-full w-full duration-1000 ease-in-out flex flex-col gap-5 pt-28 lg:section-padding px-5 ${
          inDOM ? "block" : "lg:hidden block"
        } ${
          !visible
            ? "scale-[200%] opacity-0 pointer-events-none"
            : "scale-100 opacity-100 pointer-events-auto"
        }`}
      >
        <button
          type="button"
          className="glass md:absolute w-fit mx-auto bottom-6 left-1/2 -translate-x-1/2 py-3 px-6 hover:bg-white/60 cursor-pointer duration-300 z-[1000] lg:block hidden"
          onClick={() => setAllProj(false)}
        >
          <p>Featured Projects</p>
        </button>

        <div className="glass lg:p-3 lg:h-[85%] p-4 h-[80%]">
          <h2 className="pb-6 text-center w-fit mx-auto xm:text-4xl text-3xl lg:block hidden">
            All Projects
          </h2>
          <div className="special-scroll w-full flex justify-center flex-wrap gap-6 overflow-y-scroll py-4 px-2 lg:h-[85%] h-full">
            {allProjects.map((proj, i) => (
              <Link
                key={i}
                href={proj.link}
                className="flex flex-col gap-2 sm:opacity-40 sm:hover:opacity-100 brightness-95 hover:brightness-110 focus:opacity-100 duration-300"
              >
                <img
                  src={proj.pic}
                  alt={proj.name}
                  className="lg:h-40 xm:h-28 h-20 lg:w-64 xm:w-48 w-36 object-contain"
                />
                <p className="lg:w-64 xm:w-48 w-36 text-center font-medium">
                  {proj.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
