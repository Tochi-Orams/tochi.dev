import React, { useEffect, useState } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faEnvelope, faX } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSidebarContext } from "../Context/SidebarContext";
import { useHomeSectionContext } from "../Context/HomeSectionContext";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const links = [
  {
    site: "GitHub",
    url: "https://github.com/Tochi-Orams",
    icon: <FontAwesomeIcon icon={faGithub} className="h-10" />,
  },
  {
    site: "LinkedIn",
    url: "https://www.linkedin.com/in/tochi-oramasionwu/",
    icon: <FontAwesomeIcon icon={faLinkedin} className="h-10" />,
  },
];

const Sidebar = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const [inDom, setInDOM] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const { sidebar, setSidebar } = useSidebarContext();
  const { currentSection } = useHomeSectionContext();

  const copyEmail = () => {
    navigator.clipboard.writeText("tochi.oramas@gmail.com");
    setCopied(true);
  };

  useEffect(() => {
    if (currentSection !== "home" && currentSection !== "contact") {
      setSidebar(false);
    }
  }, [currentSection]);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  }, [copied]);

  useEffect(() => {
    if (sidebar) {
      setInDOM(true);
      setTimeout(() => {
        setSidebarVisible(true);
      }, 100);
    } else {
      setSidebarVisible(false);
      setTimeout(() => {
        setInDOM(false);
      }, 300);
    }
  }, [sidebar]);

  return (
    <div
      id="sidebar"
      className={`fixed z-[90] top-0 left-0 w-full h-screen overflow-hidden ${
        inDom ? "block" : "hidden"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`absolute top-0 right-0 h-screen md:w-[430px] w-full md:bg-slate-400/40 bg-slate-700/70 backdrop-blur-md duration-300 p-12 z-[800] ${
          sidebarVisible ? "translate-x-0" : "translate-x-[100%]"
        } `}
      >
        <div className="flex flex-col h-full">
          <button
            type="button"
            aria-label="Close external links menu"
            title="Close menu"
            className="cursor-pointer ml-auto rounded-full bg-white/15 hover:bg-white/30 focus:bg-white/30 w-9 aspect-square flex flex-col justify-center items-center duration-300"
            onClick={() => setSidebar(false)}
          >
            <FontAwesomeIcon icon={faX} className="object-contain" />
          </button>

          <p className="h2Size border-b-2 border-white text-left p-2 ">
            External Links
          </p>

          <div className="flex flex-col justify-between h-[70%] mt-12">
            <div className="bg-slate-100/10 p-3 rounded-xl flex flex-col h-fit gap-3">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="flex gap-8 items-center group hover:bg-white/15 focus:bg-white/15 duration-300 p-4 rounded-xl"
                >
                  {link.icon}
                  <p className="h3Size group-hover:ml-3 group-focus:ml-3 duration-300">
                    {link.site}
                  </p>
                </a>
              ))}
            </div>

            <div
              className="group"
              onMouseEnter={() => setShowEmail(true)}
              onMouseLeave={() => setShowEmail(false)}
            >
              <button
                type="button"
                aria-label="Copy email"
                title="Copy email"
                className={`bg-slate-100/10 px-8 text-left py-3 rounded-t-xl duration-300 w-full flex items-center justify-between relative ${
                  showEmail
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
                onFocus={() => setShowEmail(true)}
                onBlur={() => setShowEmail(false)}
                onClick={copyEmail}
              >
                <p>tochi.orams@gmail.com</p>
                <div>
                  <div className="w-fit mx-auto">
                    <FontAwesomeIcon
                      icon={copied ? faCheck : (faCopy as IconProp)}
                    />
                  </div>
                  <p className="text-xs">{copied ? "Copied!" : "Copy"}</p>
                </div>
              </button>
              <a
                tabIndex={0}
                href="mailto:tochi.orams@gmail.com"
                className={`flex gap-8 duration-300 px-8 py-2 items-center ${
                  showEmail
                    ? "bg-slate-100/30 rounded-b-xl"
                    : "bg-slate-100/10 rounded-xl"
                }`}
                onFocus={() => setShowEmail(true)}
                onBlur={() => setShowEmail(false)}
              >
                <FontAwesomeIcon icon={faEnvelope} className="h-10" />
                <p className="h3Size group-hover:ml-3 duration-300">Email</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div
        className={`absolute top-0 right-0 bottom-0 left-0 bg-black duration-300 z-[700] backdrop-blur-lg ${
          sidebarVisible
            ? "opacity-70 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebar(false)}
      />
    </div>
  );
};

export default Sidebar;
