"use client";

import { projectType } from "@/app/Types/Types";
import { Shrink } from "lucide-react";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface props {
  title: "Web" | "Mobile";
  children: ReactNode;
  openSection: string;
  setOpenSection: Dispatch<SetStateAction<projectType>>;
  sec: projectType;
}

const ProjectType: FC<props> = ({
  title,
  children,
  openSection,
  setOpenSection,
  sec,
}) => {
  const [inDOM, setInDOM] = useState(false);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (openSection === sec) {
      setInDOM(true);
      setTimeout(() => {
        setReveal(true);
      }, 700);
    } else {
      setReveal(false);
      setTimeout(() => {
        setInDOM(false);
      }, 700);
    }
  }, [openSection]);

  return (
    <div
      className={`glass duration-300 relative ${
        openSection === sec
          ? "h-[70vh] w-[70vw] mb-12"
          : "h-[30vh] w-[30vh] hover:bg-white/60 cursor-pointer mb-0"
      }`}
    >
      <button
        type="button"
        aria-label={`See ${title.toLowerCase()} development projects`}
        title={`See ${title.toLowerCase()} development projects`}
        className={`flex flex-col w-full h-full justify-evenly duration-300 ${
          openSection === sec ? "opacity-0" : "opacity-100"
        }`}
        onClick={openSection === sec ? () => {} : () => setOpenSection(sec)}
      >
        <img
          src={title === "Web" ? "/Logos/web.svg" : "/Logos/mobile.svg"}
          alt={title}
          className="xl:h-24 xl:w-24 h-16 w-16 object-cover mx-auto invert"
        />
        <h3 className="mx-auto">{title}</h3>
      </button>

      <button
        type="button"
        aria-label="Minimize section"
        title="Minimize section"
        className={`cursor-pointer h-10 w-10 absolute top-6 right-6 rounded-full bg-white/30 duration-300 flex items-center hover:bg-white/60 z-50 ${
          inDOM ? "block" : "hidden"
        } ${
          openSection === sec
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpenSection("")}
      >
        <Shrink className="mx-auto" />
      </button>

      {openSection && (
        <div
          className={`duration-500 
            ${inDOM ? "block" : "hidden"}
            ${
              reveal
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ProjectType;
