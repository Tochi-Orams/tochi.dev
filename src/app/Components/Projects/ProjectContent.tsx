"use client";

import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { SectionToggle, SiteLink } from "./ProjectComponents";
import ProjectGallery from "./ProjectGallery";

interface props {
  view: "overview" | "gallery";
  setView: Dispatch<SetStateAction<"overview" | "gallery">>;
  overview: ReactNode;
  pictures: string[];
  link?: string;
}

const ProjectContent: FC<props> = ({
  view,
  setView,
  overview,
  pictures,
  link,
}) => {
  const [onGallerySection, setOnGallerySection] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (onGallerySection) {
        setView("gallery");
      } else {
        setView("overview");
      }
    }, 300);
  }, [onGallerySection]);

  const toggleProps = {
    setOnGallerySection,
    view,
    link,
  };

  const linkProps = {
    link,
  };

  return (
    <section
      id="summary"
      className={`glass duration-1000 relative overflow-hidden flex flex-col ${
        view === "overview"
          ? "lg:w-2/3 w-full lg:h-[75vh] h-[74vh] p-6"
          : "w-full h-[78vh] p-2"
      }`}
    >
      <div className="flex items-center justify-between">
        <SectionToggle props={toggleProps} />
        {link !== "" && <SiteLink props={linkProps} />}
      </div>

      <div className="relative flex-1 mt-4">
        <div
          className={`duration-500 absolute h-full overflow-y-scroll pr-4 special-scroll anim ${
            onGallerySection
              ? "opacity-0 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }`}
        >
          {overview}
        </div>

        <div
          className={`duration-1000 absolute h-full w-full ${
            !onGallerySection
              ? "opacity-0 pointer-events-none mt-4"
              : "opacity-100 pointer-events-auto delay-500"
          }`}
        >
          <ProjectGallery pictures={pictures} />
        </div>
      </div>
    </section>
  );
};

export default ProjectContent;
