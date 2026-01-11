"use client";

import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useHomeSectionContext } from "../Context/HomeSectionContext";
import { usePlayerOpenContext } from "../Context/MusicPlayerContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const navPages = [
  { id: "home", text: "Home" },
  { id: "about", text: "About Me" },
  { id: "projects", text: "Projects" },
  { id: "contact", text: "Contact" },
];

interface NavArrowProps {
  direction: "next" | "previous";
  setPeek: Dispatch<SetStateAction<boolean>>;
}

export const NavArrow: FC<NavArrowProps> = ({ direction, setPeek }) => {
  const [inDOM, setInDOM] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { currentSection } = useHomeSectionContext();
  const { setPlayerOpen } = usePlayerOpenContext();

  const nextPage = () => {
    navPages.forEach((page, i) => {
      if (page.id === currentSection && i < navPages.length - 1) {
        (
          document.getElementById(navPages[i + 1].id) as HTMLAnchorElement
        ).click();
        setPeek(false);
      }
    });
  };

  const previousPage = () => {
    navPages.forEach((page, i) => {
      if (page.id === currentSection && i > 0) {
        (
          document.getElementById(navPages[i - 1].id) as HTMLAnchorElement
        ).click();
        setPeek(false);
      }
    });
  };

  useEffect(() => {
    if (
      (direction === "previous" && currentSection === "home") ||
      (direction === "next" && currentSection === "contact")
    ) {
      setIsVisible(false);
      setTimeout(() => {
        setInDOM(false);
      }, 100);
    } else {
      setInDOM(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }
  }, [currentSection]);

  return (
    <button
      role="link"
      title={`${direction} section`}
      aria-label={`${direction} section`}
      className={`h-8 !pointer-events-auto aspect-square rounded-full bg-white/30 backdrop-blur-md duration-300 items-center cursor-pointer absolute z-10 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${inDOM ? "flex" : "hidden"} ${
        direction === "previous" ? "left-[60px]" : "right-[60px]"
      }`}
      onClick={direction === "previous" ? previousPage : nextPage}
      onFocus={() => setPlayerOpen(false)}
    >
      {direction == "previous" ? (
        <ChevronLeft className="text-white h-4 mx-auto" />
      ) : (
        <ChevronRight className="text-white h-4 mx-auto" />
      )}
    </button>
  );
};
