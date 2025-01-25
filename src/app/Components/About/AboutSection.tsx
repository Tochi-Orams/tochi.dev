"use client";

import { useEffect, useState } from "react";
import Bio from "./Bio";
import Skills from "./Skills";

const AboutSection = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [inDOM, setInDOM] = useState({ bio: true, skills: false });

  useEffect(() => {
    if (inDOM.skills) {
      setShowSkills(true);
      setTimeout(() => {
        setInDOM({ ...inDOM, bio: false });
      }, 1000);
    }
  }, [inDOM.skills]);

  useEffect(() => {
    if (inDOM.bio) {
      setShowSkills(false);
      setTimeout(() => {
        setInDOM({ ...inDOM, skills: false });
      }, 1000);
    }
  }, [inDOM.bio]);

  return (
    <section
      id="about-section"
      className="w-full h-screen overflow-hidden relative"
    >
      <div className="flex flex-col w-full h-full">
        {inDOM.bio && (
          <Bio
            showSkills={showSkills}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            inDOM={inDOM}
            setInDOM={setInDOM}
          />
        )}
        {inDOM.skills && (
          <Skills showSkills={showSkills} inDOM={inDOM} setInDOM={setInDOM} />
        )}
      </div>
    </section>
  );
};

export default AboutSection;
