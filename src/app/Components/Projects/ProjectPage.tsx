"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { usePageContext } from "../../Context/pageContext";
import ProjectDetails from "./ProjectDetails";
import ProjectContent from "./ProjectContent";
import ProjectNav from "./ProjectNav";

interface props {
  props: {
    tags: string[];
    info: {
      type: string;
      role: string;
      status: string;
      name: string;
    };
    link?: string;
    pictures: string[];
    summary: ReactNode;
    slug: string;
  };
}

const ProjectPage: FC<props> = ({ props }) => {
  const { tags, info, link, pictures, summary, slug } = props;

  const [view, setView] = useState<"overview" | "gallery">("overview");

  const { currentPage, setCurrentPage } = usePageContext();

  useEffect(() => {
    setCurrentPage(slug);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <div className="lg:section-padding xl:px-24 sm:px-10 px-4 pt-5 relative z-0 duration-1000">
      <ProjectNav />

      <div
        className={`flex justify-between duration-1000 lg:flex-row flex-col-reverse max-lg:gap-6 ${
          view === "overview" ? "lg:mt-28 mt-24 lg:gap-8" : "mt-20 gap-0"
        }`}
      >
        <ProjectDetails tags={tags} view={view} info={info} />

        <ProjectContent
          view={view}
          setView={setView}
          overview={summary}
          pictures={pictures}
          link={link}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 lg:h-[100vh] lg:w-[100vw] -z-10 pointer-events-none">
        <img
          src="/Sequence/0010.jpg"
          alt="bg"
          className="h-full w-full object-cover pointer-events-none opacity-40"
        />
      </div>
    </div>
  );
};

export default ProjectPage;
