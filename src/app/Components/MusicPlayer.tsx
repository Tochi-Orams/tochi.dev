"use client";

import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { usePageContext } from "../Context/pageContext";
import { useNavOpenContext } from "../Context/NavOpenContext";
import { usePageLoadedContext } from "../Context/PageLoadContext";
import { useSidebarContext } from "../Context/SidebarContext";
import { usePlayerOpenContext } from "../Context/MusicPlayerContext";

const MusicPlayer = () => {
  const [projectInfo, setProjectInfo] = useState({ title: "", pic: "" });
  const [isPlaying, setIsPlaying] = useState({ playing: false, follow: true });
  const [display, setDisplay] = useState(false);

  const { currentPage } = usePageContext();
  const { navOpen, setNavOpen } = useNavOpenContext();
  const { playerOpen, setPlayerOpen } = usePlayerOpenContext();
  const { pageLoaded } = usePageLoadedContext();
  const { sidebar, setSidebar } = useSidebarContext();

  useEffect(() => {
    if (currentPage === "home") {
      if (pageLoaded) {
        setTimeout(() => {
          setDisplay(true);
        }, 1300);
      } else {
        setDisplay(false);
      }
    } else {
      setDisplay(true);
    }
  }, [pageLoaded, currentPage]);

  useEffect(() => {
    switch (currentPage) {
      case "quantumapps":
        setProjectInfo({
          title: "QuantumApps",
          pic: `/Projects/Logos/${currentPage}.png`,
        });
        break;
      case "techinto":
        setProjectInfo({
          title: "TechinTO",
          pic: `/Projects/Logos/${currentPage}.png`,
        });
        break;
      case "toronto-musicians-hub":
        setProjectInfo({
          title: "Toronto Musicians Hub",
          pic: `/Projects/Logos/${currentPage}.png`,
        });
        break;
      case "rose-picnic":
        setProjectInfo({
          title: "Rosé Picnic",
          pic: `/Projects/Logos/${currentPage}.png`,
        });
        break;
      case "sickkids-picu-clinic":
        setProjectInfo({
          title: "SickKids PICU Clinic",
          pic: `/Projects/Logos/${currentPage}.png`,
        });
        break;
      case "pixelpraise":
        setProjectInfo({
          title: "PixelPraise",
          pic: `/Projects/Logos/${currentPage}.png`,
        });
        break;
      case "act-io":
        setProjectInfo({
          title: "Act.IO",
          pic: `/Projects/Logos/${currentPage}.png`,
        });
        break;
      case "langulife":
        setProjectInfo({
          title: "Langulife",
          pic: `/Projects/Logos/${currentPage}.png`,
        });
        break;
      case "klub-record":
        setProjectInfo({
          title: "Klub Record",
          pic: `/Projects/Logos/${currentPage}.png`,
        });
        break;
      case "oru-digital":
        setProjectInfo({
          title: "Oru.Digital",
          pic: `/Projects/Logos/${currentPage}.png`,
        });
        break;
      case "tasqr":
        setProjectInfo({
          title: "tasQR",
          pic: `/Projects/Logos/${currentPage}.png`,
        });
        break;
      default:
        setProjectInfo({ title: "", pic: "" });
    }

    if (currentPage === "home") {
      (document.querySelector("html") as HTMLHtmlElement).style.scrollSnapType =
        "y mandatory";
    } else {
      (document.querySelector("html") as HTMLHtmlElement).style.scrollSnapType =
        "";
    }
  }, [currentPage]);

  return (
    <div
      className={`absolute z-20 ${
        currentPage !== "home"
          ? "top-5 xl:left-[100px] sm:left-[40px] left-5"
          : "lg:top-[20vh] top-28 left-1/2 -translate-x-1/2"
      } ${
        sidebar
          ? "pointer-events-none opacity-0"
          : "opacity-100 pointer-events-auto"
      }`}
    >
      <div
        className={` items-center lg:gap-8 gap-5 flex duration-500 ${
          display
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          role="menu"
          aria-label="music player"
          aria-expanded={playerOpen}
          className={`rounded-full z-30 duration-500 md:flex hidden items-center bg-white/30 backdrop-blur-md overflow-clip
          ${currentPage !== "home" ? "h-16" : "lg:h-28 h-16"}
          ${
            currentPage === "home"
              ? playerOpen
                ? "lg:w-[26.5rem] w-[22.6rem]"
                : "lg:w-28 w-16"
              : playerOpen
              ? "w-[22.8rem]"
              : "w-16"
          }`}
          onMouseEnter={() => {
            setPlayerOpen(true);
            setNavOpen(false);
          }}
          onClick={() => {
            setPlayerOpen(!playerOpen);
            setNavOpen(false);
          }}
          onMouseLeave={() => setPlayerOpen(false)}
          onFocus={() => setSidebar(false)}
        >
          <FontAwesomeIcon
            icon={faMusic}
            className={`mx-auto duration-500 ${
              currentPage === "home"
                ? "lg:h-10 h-6 lg:!mx-8 !mx-[18px]"
                : playerOpen
                ? "h-6 !mx-[18px]"
                : "h-6 !mx-[18px]"
            }`}
          />
          <div
            className={`duration-500 overflow-hidden w-auto ${
              playerOpen ? "w-80 opacity-100" : "w-0 mr-0 opacity-0"
            }`}
          >
            <audio
              controls
              onPlay={() => setIsPlaying({ playing: true, follow: true })}
              onPause={() => setIsPlaying({ ...isPlaying, playing: false })}
              onEnded={() => setIsPlaying({ playing: false, follow: false })}
              tabIndex={playerOpen ? 1 : -1}
            >
              <source src="Sanctuary (Mixed).mp3" type="audio/mpeg" />
              Audio not supported
            </audio>
          </div>
        </button>
        {projectInfo.title !== "" && (
          <div
            className={`glass flex gap-4 items-center rounded-full py-3 pl-[14px] w-auto mx-auto duration-500 overflow-hidden ${
              navOpen || playerOpen ? "max-w-[68px] px-0" : "max-w-[450px] px-8"
            }`}
          >
            <img
              src={projectInfo.pic}
              alt={projectInfo.title}
              className="min-w-10 max-w-10 flex-1 h-10 rounded-xl object-contain"
            />
            <h1 className="sm:text-3xl text-xl sm:pb-2 pb-1 text-nowrap">
              {projectInfo.title}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
