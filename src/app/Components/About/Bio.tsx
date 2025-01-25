"use client";

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Education, Hobbies, Overview } from "./BioSections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const sections = ["Overview", "Education", "Hobbies"];

interface bioProps {
  showSkills: boolean;
  activeSection: number;
  setActiveSection: Dispatch<SetStateAction<number>>;
  inDOM: { skills: boolean; bio: boolean };
  setInDOM: Dispatch<SetStateAction<{ skills: boolean; bio: boolean }>>;
}

const Bio: FC<bioProps> = ({
  showSkills,
  activeSection,
  setActiveSection,
  inDOM,
  setInDOM,
}) => {
  const [displaySection, setDisplaySection] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplaySection(activeSection);
    }, 500);
  }, [activeSection]);

  useEffect(() => {
    if (fade) {
      setTimeout(() => {
        setFade(false);
      }, 500);
    }
  }, [displaySection]);

  return (
    <div
      className={`absolute top-0 left-0 bottom-0 right-0 duration-[1500ms] ${
        showSkills
          ? "-translate-x-full opacity-0 delay-0"
          : "translate-x-0 opacity-100 delay-300"
      }`}
    >
      <div className="absolute h-[78vh] sm:top-8 top-0 right-0 bottom-0 left-0 section-padding bg-transparent pt-24 flex xl:flex-row flex-col items-center justify-around">
        <div className="glass h-full xl:w-[75%] w-full lg:py-10 lg:px-16 sm:p-6 p-4 overflow-hidden z-[1500]">
          <div className={`duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
            {displaySection === 0 ? (
              <Overview displaySection={displaySection} />
            ) : displaySection === 1 ? (
              <Education displaySection={displaySection} />
            ) : (
              <Hobbies displaySection={displaySection} />
            )}
          </div>
          <div className="absolute sm:top-6 top-[90%] sm:right-6 right-1/2 sm:translate-x-0 translate-x-1/2 flex gap-3 xl:hidden">
            <button
              type="button"
              aria-label="Previous bio section"
              title="Previous bio section"
              className={`h-8 aspect-square rounded-full bg-white/15 hover:bg-white/30 duration-300 flex items-center cursor-pointer`}
              onClick={() => {
                setActiveSection(activeSection > 0 ? activeSection - 1 : 2);
                setFade(true);
              }}
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-white h-4 mx-auto"
              />
            </button>
            <button
              type="button"
              aria-label="Next bio section"
              title="Next bio section"
              className={`h-8 aspect-square rounded-full bg-white/15 hover:bg-white/30 duration-300 flex items-center cursor-pointer`}
              onClick={() => {
                setActiveSection(activeSection < 2 ? activeSection + 1 : 0);
                setFade(true);
              }}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-white h-4 mx-auto"
              />
            </button>
          </div>
        </div>
        <div className="glass xl:flex hidden xl:flex-col flex-row p-3 xl:w-[20%] w-fit xl:gap-2 gap-4 xl:mt-0 mt-10 h-fit justify-between">
          {sections.map((sec, i) => (
            <button
              type="button"
              key={i}
              className={`cursor-pointer w-full text-center duration-300 rounded-xl py-2 ${
                i === activeSection
                  ? "bg-white/30"
                  : "bg-white/0 hover:bg-white/15"
              }`}
              onClick={() => {
                setActiveSection(i);
                setFade(true);
              }}
            >
              <p
                className={`h3Size xl:px-0 px-3 ${
                  i === activeSection ? "font-bold" : "font-normal"
                }`}
              >
                {sec}
              </p>
            </button>
          ))}
        </div>
      </div>
      <div className="absolute sm:bottom-6 bottom-20 left-1/2 -translate-x-1/2 h-14">
        <button
          type="button"
          className="duration-300 rounded-full px-6 h-full flex gap-4 items-center cursor-pointer backdrop-blur-md bg-white/30 hover:bg-white/45"
          onClick={() => setInDOM({ ...inDOM, skills: true })}
        >
          <p className="h3Size font-normal mx-auto">Show Skills</p>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Bio;
