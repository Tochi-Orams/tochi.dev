"use client";

import {
  faChevronLeft,
  faChevronRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";

interface props {
  pictures: string[];
}

const ProjectGallery: FC<props> = ({ pictures }) => {
  const [hover, setHover] = useState(false);
  const [expand, setExpand] = useState(false);
  const [inDOM, setInDOM] = useState(false);
  const [pic, setPic] = useState(0);

  useEffect(() => {
    if (inDOM) {
      setExpand(true);
    }
  }, [inDOM]);

  useEffect(() => {
    if (!expand) {
      setTimeout(() => {
        setInDOM(false);
      }, 1000);
    }
  }, [expand]);

  useEffect(() => {
    const pics = document.querySelectorAll(".galPic") as NodeList;

    const next = pic < pictures.length - 1 ? pic + 1 : 0;
    const prev = pic > 0 ? pic - 1 : pictures.length - 1;

    pics.forEach((item, i) => {
      if (i !== pic && i !== next && i !== prev) {
        (item as HTMLElement).style.transitionDuration = "0s";
        (item as HTMLElement).style.opacity = "0";
        (item as HTMLElement).style.transform = "translateX(0%)";
      } else {
        (item as HTMLElement).style.transitionDuration = "0.5s";
      }

      if (i === next) {
        (item as HTMLElement).style.transform = "translateX(100%)";
        (item as HTMLElement).style.opacity = "0";
      } else if (i === prev) {
        (item as HTMLElement).style.transform = "translateX(-100%)";
        (item as HTMLElement).style.opacity = "0";
        (item as HTMLElement).style.transform = "translateX(-100%)";
      } else if (i === pic) {
        (item as HTMLElement).style.transform = "translateX(0)";
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "translateX(0%)";
      }
    });
  }, [pic]);

  // Use keys to navigate or close
  const handleKey = (e: KeyboardEvent) => {
    if (e.code === "ArrowLeft") {
      setPic(pic > 0 ? pic - 1 : pictures.length - 1);
    } else if (e.code === "ArrowRight") {
      setPic(pic < pictures.length - 1 ? pic + 1 : 0);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div id="all" className="flex flex-col justify-between relative h-full">
      <div
        className={`duration-700 flex flex-col h-full ${
          expand ? "opacity-0 blur-sm" : "opacity-100 delay-300"
        }`}
      >
        <div className="flex flex-1 items-center justify-around">
          <button
            type="button"
            aria-label="Previous picture"
            title="Previous picture"
            className="rounded-full lg:flex hidden p-4 ml-4 flex-col items-center justify-center bg-white/15 hover:bg-white/30 duration-300 z-50 cursor-pointer"
            onClick={() => setPic(pic > 0 ? pic - 1 : pictures.length - 1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
          </button>

          <div className="lg:w-[80%] w-[95%] h-full mx-auto relative overflow-clip">
            {pictures.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`pic ${i}`}
                className="galPic absolute top-0 left-0 h-full w-full object-contain"
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next picture"
            title="Next picture"
            className="rounded-full lg:flex hidden p-4 mr-4 flex-col items-center justify-center bg-white/15 hover:bg-white/30 duration-300 z-50 cursor-pointer"
            onClick={() => setPic(pic < pictures.length - 1 ? pic + 1 : 0)}
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom section */}
        <div className="flex items-center h-fit lg:pt-2">
          {/* small view button */}
          <button
            type="button"
            aria-label="Previous image"
            title="Previous image"
            className="rounded-full w-fit p-4 ml-4 lg:hidden flex flex-col items-center justify-center bg-white/15 hover:bg-white/30 duration-300 z-50 cursor-pointer"
            onClick={() => setPic(pic > 0 ? pic - 1 : pictures.length - 1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
          </button>

          {/* Expand Button */}
          <button
            type="button"
            aria-label="Show all pictures"
            title="Show all pictures"
            className="mx-auto rounded-xl bg-white/15 hover:bg-white/30 p-3 duration-300"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={expand ? () => setExpand(false) : () => setInDOM(true)}
          >
            <div
              className={`mx-auto w-fit flex duration-300 cursor-pointer px-4`}
            >
              <div
                className={`h-1 w-5 bg-white rounded-full -mr-[2.5px] duration-300 ${
                  hover ? "-rotate-[30deg]" : ""
                }`}
              />
              <div
                className={`h-1 w-5 bg-white rounded-full -ml-[2.5px] duration-300 ${
                  hover ? "rotate-[30deg]" : ""
                }`}
              />
            </div>
          </button>

          {/* small view button */}
          <button
            type="button"
            aria-label="Next picture"
            title="Next picture"
            className="rounded-full w-fit p-4 mr-4 flex lg:hidden flex-col items-center justify-center bg-white/15 hover:bg-white/30 duration-300 z-50 cursor-pointer"
            onClick={() => setPic(pic < pictures.length - 1 ? pic + 1 : 0)}
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Full Gallery */}
      {inDOM && (
        <div
          className={`h-[calc(78vh-80px)] w-full duration-1000 absolute top-[24px] left-0 rounded-2xl bg-white/15 ${
            expand
              ? "md:-translate-y-[4.2%] -translate-y-[3%] opacity-100 pointer-events-auto"
              : "translate-y-[110%] opacity-100 pointer-events-none overflow-hidden"
          }`}
        >
          <div className="special-scroll h-[calc(78vh-120px)] w-[98%] mx-auto flex flex-col items-center overflow-y-scroll my-[20px]">
            <button
              type="button"
              aria-label="Close expanded view"
              title="Close expanded view"
              className="cursor-pointer absolute sm:top-4 sm:left-4 left-2 top-2 flex flex-col duration-300 justify-center items-center p-2 bg-white/30 hover:bg-white/45 rounded-full"
              onClick={() => setExpand(false)}
            >
              <FontAwesomeIcon icon={faX} className="sm:h-4 sm:w-4 h-3 w-3" />
            </button>
            <div className="flex gap-4 justify-center w-[90%] flex-wrap">
              {pictures.map((pic, i) => (
                <button
                  type="button"
                  aria-label={`Open image ${i + 1}`}
                  title={`Open image ${i + 1}`}
                  key={i}
                  className="cursor-pointer hover:brightness-50 duration-300"
                  onClick={() => {
                    setPic(i);
                    setExpand(false);
                  }}
                >
                  <img
                    src={pic}
                    alt={`pic ${i}`}
                    className="h-28 w-56 object-cover rounded-md"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
