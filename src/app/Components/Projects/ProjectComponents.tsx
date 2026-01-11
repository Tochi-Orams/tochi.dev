"use client";

import { ArrowUpRightFromSquare } from "lucide-react";
import { Dispatch, FC, SetStateAction } from "react";

interface linkProps {
  props: {
    link?: string;
  };
}

export const SiteLink: FC<linkProps> = ({ props }) => {
  const { link } = props;

  return (
    <a href={link} target="_blank" className="duration-300 group p-1">
      <div className="bg-white/15 sm:px-4 px-2 py-1 flex gap-3 hover:bg-white/30 cursor-pointer duration-300 text-nowrap rounded-lg group-focus:outline">
        <p className="sm:block hidden">Visit Site</p>
        <ArrowUpRightFromSquare className="h-3 opacity-60 sm:pt-1 max-sm:py-1" />
      </div>
    </a>
  );
};

interface secTogProps {
  props: {
    setOnGallerySection: Dispatch<SetStateAction<boolean>>;
    view: "overview" | "gallery";
    link?: string;
  };
}

export const SectionToggle: FC<secTogProps> = ({ props }) => {
  const { setOnGallerySection, view, link } = props;

  return (
    <div className={`flex z-50 duration-300 w-full`}>
      <button
        type="button"
        className={`duration-1000 w-24 text-left ${
          view === "gallery"
            ? "scale-75 text-white/30 hover:text-white/65 hover:duration-300"
            : "text-white pointer-events-none"
        }`}
        onClick={() => setOnGallerySection(false)}
      >
        <p
          className={`font-medium text-2xl border-b-2 w-fit pb-1 duration-1000 ${
            view == "overview" ? "border-white" : "border-transparent"
          }`}
        >
          Overview
        </p>
      </button>

      <button
        type="button"
        className={`font-medium text-2xl duration-1000 w-32 text-center pb-1 ${
          link && link !== "" ? "sm:relative absolute" : "absolute"
        } ${
          view === "overview"
            ? link && link !== ""
              ? "scale-75 text-white/30 hover:text-white/65 hover:duration-300 sm:left-0 left-28"
              : "scale-75 text-white/30 hover:text-white/65 hover:duration-300 left-28"
            : "text-white pointer-events-none left-1/2 sm:-translate-x-24 -translate-x-1/2"
        }`}
        onClick={() => setOnGallerySection(true)}
      >
        Gallery
      </button>
    </div>
  );
};
