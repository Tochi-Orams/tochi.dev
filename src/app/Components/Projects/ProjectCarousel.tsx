"use client";

import { projectType } from "@/app/Types/Types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface props {
  projects: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
  sec: projectType;
}

const ProjectCarousel: FC<props> = ({ projects, sec }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [slide, setSlide] = useState(0);
  const [segment, setSegment] = useState(0);

  let timer: any;

  const nextSlide = () => {
    setSegment(0);
    clearTimeout(timer);
    setSlide(slide === projects.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSegment(0);
    clearTimeout(timer);
    setSlide(slide === 0 ? projects.length - 1 : slide - 1);
  };

  useEffect(() => {
    if (!isPaused) {
      timer = setTimeout(() => {
        setSegment(segment + 1);
      }, 500);
    }

    if (segment === 21) {
      nextSlide();
    }

    if (sec === "web") {
      (
        document.querySelector(`.progress-web`) as HTMLDivElement
      ).style.transform = `translateX(${-1 * (100 - segment * 5)}%)`;
    } else {
      (
        document.querySelector(`.progress-mobile`) as HTMLDivElement
      ).style.transform = `translateX(${-1 * (100 - segment * 5)}%)`;
    }
  }, [isPaused, segment]);

  return (
    <div className="rounded-3xl absolute top-0 left-0 h-full w-full group">
      {/* Navigation */}
      <button
        type="button"
        aria-label="Previous slide"
        title="Previous slide"
        className="absolute top-[45%] -translate-y-1/2 z-40 left-10"
        onClick={prevSlide}
      >
        <div className="text-white/30 hover:!bg-white/30 duration-300 cursor-pointer h-16 w-16 rounded-xl bg-white/0 group-hover:bg-white/15 flex flex-col justify-center items-center">
          <ChevronLeft className="h-10" />
        </div>
      </button>

      <button
        type="button"
        aria-label="Next slide"
        title="Next slide"
        className="absolute top-[45%] -translate-y-1/2 z-40 right-10"
        onClick={nextSlide}
      >
        <div className="text-white/30 hover:!bg-white/30 duration-300 cursor-pointer h-16 w-16 rounded-xl bg-white/0 group-hover:bg-white/15 flex flex-col justify-center items-center">
          <ChevronRight className="h-10" />
        </div>
      </button>

      {/* Project */}
      {projects.map((project, i) => (
        <div
          key={i}
          className={`w-full h-full absolute rounded-3xl duration-500 overflow-hidden ${
            slide === i
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute bottom-0 left-0 right-0 h-1/2 z-20 p-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <h2 className="mb-4">{project.title}</h2>
            <div className="flex justify-between items-center gap-6">
              <p className="w-4/5">{project.description}</p>
              <Link
                tabIndex={slide !== i ? 1 : undefined}
                href={project.link}
                className="rounded-2xl w-40 bg-white/15 hover:bg-white/30 focus:bg-white/30 duration-300 px-8 py-3 text-center"
              >
                <p className="h4Size font-medium">View Project</p>
              </Link>
            </div>
          </div>
          <img
            src={project.image}
            alt={project.title}
            className={`h-full w-full -z-10 duration-300 rounded-3xl ${
              isPaused ? "opacity-80" : "opacity-40"
            } ${
              sec === "mobile" ? "pb-40 pt-10 object-contain" : "object-cover"
            }`}
          />
          <div className="shade z-0 absolute top-0 right-0 h-full w-full" />
        </div>
      ))}

      {/* Carousel Progress */}
      <div className="absolute left-1/2 bottom-3 w-[90%] -translate-x-1/2 flex gap-6 items-center">
        <div className="w-full h-[6px] bg-white/30 overflow-hidden rounded-sm">
          <div
            className={`progress-${sec} ${
              segment !== 0 ? "duration-1000" : "!duration-0"
            }`}
          />
        </div>
      </div>

      {/* Slide buttons */}
      <div className="glass px-5 py-2 flex gap-7 items-center absolute -bottom-10 left-1/2 -translate-x-1/2 z-40">
        {projects.map((page, i) => (
          <button
            type="button"
            aria-label={`Slide ${i + 1}`}
            title={`Slide ${i + 1}`}
            key={i}
            className={`cursor-pointer h-3 aspect-square rounded-full bg-white flex items-center duration-300 ${
              slide === i ? "bg-white/60 scale-150" : "bg-white/30 scale-100"
            }`}
            onClick={() => {
              setSegment(0);
              clearTimeout(timer);
              setSlide(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
