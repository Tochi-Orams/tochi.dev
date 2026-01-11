"use client";

import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import {
  creativeSkills,
  defaultType,
  devSkills,
  mobDefault,
} from "./SkillConstants";
import { ArrowLeft, Code, Palette } from "lucide-react";

interface props {
  showSkills: boolean;
  inDOM: { skills: boolean; bio: boolean };
  setInDOM: Dispatch<SetStateAction<{ skills: boolean; bio: boolean }>>;
}

const Skills: FC<props> = ({ showSkills, inDOM, setInDOM }) => {
  const [VW, setVW] = useState(1000);
  const [skillType, setSkillType] = useState("");
  const [activeSkill, setActiveSkill] = useState(defaultType);
  const [logo, setLogo] = useState("none");

  useEffect(() => {
    setVW(window.innerWidth);
    window.addEventListener("resize", () => setVW(window.innerWidth));
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 bottom-0 right-0 ${
        showSkills
          ? "opacity-100 scale-100 delay-300 duration-[700ms]"
          : "scale-50 opacity-0 delay-0 duration-[1200ms] pointer-events-none"
      } `}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 section-padding bg-transparent xl:pt-36 xl:pb-44 pt-0 pb-16 flex xl:flex-row flex-col-reverse items-center justify-around">
        {/* Skill Overview */}
        <div className="xl:h-full h-1/2 xl:w-1/2 w-full flex flex-col items-center justify-center text-center">
          <div className="w-2/3 h-96 flex flex-col justify-center items-center">
            <div className="h-36 w-36 mx-auto">
              {activeSkill.logo !== "" && (
                <img
                  src={activeSkill.logo}
                  alt={activeSkill.skill}
                  className="h-full w-full mx-auto object-cover"
                />
              )}
            </div>
            <h2 className="my-6">{activeSkill.skill}</h2>
            <p className="font-medium">{activeSkill.desc}</p>
          </div>
        </div>
        {/* Skill Selection */}
        <FullSkills
          showSkills={showSkills}
          setActiveSkill={setActiveSkill}
          skillType={skillType}
          setSkillType={setSkillType}
          logo={logo}
          setLogo={setLogo}
          VW={VW}
        />
        <MobileSkills
          showSkills={showSkills}
          setActiveSkill={setActiveSkill}
          skillType={skillType}
          setSkillType={setSkillType}
          logo={logo}
          setLogo={setLogo}
          VW={VW}
        />

        <div
          className={`bg-black/80 absolute top-0 right-0 bottom-0 left-0 duration-300 xl:hidden block ${
            skillType !== "" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setSkillType("")}
        />
      </div>

      <div className="absolute sm:bottom-6 bottom-20 left-1/2 -translate-x-1/2 h-14 z-50">
        <button
          type="button"
          className="duration-300 rounded-full px-6 h-full flex gap-4 items-center cursor-pointer backdrop-blur-md bg-white/30 hover:bg-white/45"
          onClick={() => setInDOM({ ...inDOM, bio: true })}
        >
          <ArrowLeft />
          <p className="h3Size font-normal mx-auto">Show Bio</p>
        </button>
      </div>
    </div>
  );
};

export default Skills;

interface SP {
  showSkills: boolean;
  setActiveSkill: Dispatch<SetStateAction<typeof defaultType>>;
  skillType: string;
  setSkillType: Dispatch<SetStateAction<string>>;
  logo: string;
  setLogo: Dispatch<SetStateAction<string>>;
  VW: number;
}

const FullSkills: FC<SP> = ({
  showSkills,
  setActiveSkill,
  skillType,
  setSkillType,
  logo,
  setLogo,
  VW,
}) => {
  useEffect(() => {
    if (!showSkills) {
      setActiveSkill(defaultType);
      setTimeout(() => {
        setSkillType("");
      }, 1000);
    }
    if (skillType === "" && VW > 1250) {
      setActiveSkill(defaultType);
    }
  }, [showSkills, skillType]);

  const handleHover = (skill: typeof defaultType) => {
    setActiveSkill(skill);
    setLogo(skill.skill);
  };

  return (
    <div
      className={`flex-col gap-10 xl:flex hidden ${
        !showSkills ? "pointer-events-none" : ""
      }`}
    >
      {/* Dev Skills */}
      <div className="flex flex-col h-full justify-center items-center gap-12 w-[580px]">
        <div
          className={`glass flex flex-col items-center text-center h-auto overflow-hidden duration-300 p-8 pt-4 ${
            skillType === "dev"
              ? "max-h-[400px] w-[100%]"
              : "max-h-[4rem] w-[40%]"
          }`}
          onMouseEnter={() => setLogo("choose")}
          onMouseLeave={() => setLogo("none")}
        >
          <button
            type="button"
            className="cursor-pointer mb-4 p-4 pt-0"
            onClick={() => setSkillType(skillType === "dev" ? "" : "dev")}
          >
            <p className="h3Size">Dev Skills</p>
          </button>
          <div
            className={`flex-wrap gap-4 justify-center w-[516px] h-fit duration-300 ${
              skillType === "dev"
                ? "flex opacity-100 delay-100"
                : "hidden opacity-0 delay-0"
            }`}
          >
            {devSkills.map((skill, i) => (
              <button
                key={i}
                type="button"
                role="option"
                title={skill.skill}
                aria-label={skill.skill}
                onMouseEnter={() => handleHover(skill)}
                onClick={() => handleHover(skill)}
              >
                <img
                  key={i}
                  src={skill.logo}
                  alt={skill.skill}
                  className={`h-14 w-14 object-cover cursor-pointer duration-300 m-1 ${
                    logo === "choose"
                      ? "opacity-30"
                      : logo === skill.skill || logo === "none"
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Creative Skills */}
      <div className="flex flex-col h-full justify-center items-center gap-12 w-[580px]">
        <div
          className={`glass flex flex-col items-center text-center h-auto overflow-hidden duration-300 p-8 pt-4 ${
            skillType === "creative"
              ? "max-h-[400px] w-[100%]"
              : "max-h-[4rem] w-[40%]"
          }`}
          onMouseEnter={() => setLogo("choose")}
          onMouseLeave={() => setLogo("none")}
        >
          <button
            type="button"
            className="cursor-pointer pb-4 px-1 mb-4"
            onClick={() =>
              setSkillType(skillType === "creative" ? "" : "creative")
            }
          >
            <p className="h3Size">Creative Skills</p>
          </button>
          <div
            className={`flex-wrap gap-4 justify-center w-[516px] h-fit duration-300 ${
              skillType === "creative"
                ? "flex opacity-100 delay-100"
                : "hidden opacity-0 delay-0"
            }`}
          >
            {creativeSkills.map((skill, i) => (
              <button
                key={i}
                type="button"
                role="option"
                aria-label={skill.skill}
                title={skill.skill}
                onMouseEnter={() => handleHover(skill)}
                onClick={() => handleHover(skill)}
              >
                <img
                  key={i}
                  src={skill.logo}
                  alt={skill.skill}
                  className={`h-16 w-16 object-cover cursor-pointer duration-300 m-1 ${
                    logo === "choose"
                      ? "opacity-30"
                      : logo === skill.skill || logo === "none"
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileSkills: FC<SP> = ({
  showSkills,
  setActiveSkill,
  skillType,
  setSkillType,
  logo,
  setLogo,
  VW,
}) => {
  useEffect(() => {
    if (!showSkills && VW < 1250) {
      setActiveSkill(mobDefault);
      setTimeout(() => {
        setSkillType("");
      }, 1000);
    }
  }, [showSkills, skillType, VW]);

  const handleHover = (skill: typeof defaultType) => {
    setActiveSkill(skill);
    setLogo(skill.skill);
  };

  return (
    <div
      className={`flex-col gap-[10px] xl:hidden flex w-fit absolute top-28 sm:right-0 max-sm:left-0 section-padding ${
        !showSkills ? "pointer-events-none" : ""
      }`}
    >
      {/* Dev Skills */}
      <div className="flex flex-col justify-center items-center gap-12 w-fit sm:ml-auto max-sm:mr-auto">
        <div
          className={`glass flex flex-col items-center text-center h-auto w-auto overflow-hidden duration-300 rounded-3xl min-w-12 min-h-12 ${
            skillType === "dev"
              ? "max-h-[400px] max-w-[80vw] p-4 pt-1"
              : "max-h-12 max-w-12 aspect-square"
          }`}
        >
          <button
            type="button"
            aria-label="Dev skills"
            title="dev skills"
            className="cursor-pointer"
            onClick={() => setSkillType(skillType === "dev" ? "" : "dev")}
          >
            <p
              className={`h3Size mt-[10px] ${
                skillType === "dev" ? "mb-6" : ""
              }`}
            >
              <Code className="w-8 object-contain" />
            </p>
          </button>
          <div
            className={`flex-wrap gap-4 justify-center xl:w-[516px] h-fit duration-300 ${
              skillType === "dev"
                ? "flex opacity-1000 delay-100"
                : "hidden opacity-0 delay-0"
            }`}
          >
            {devSkills.map((skill, i) => (
              <button
                key={i}
                type="button"
                role="option"
                title={skill.skill}
                aria-label={skill.skill}
                onClick={() => {
                  handleHover(skill);
                  setSkillType("");
                }}
              >
                <img
                  key={i}
                  src={skill.logo}
                  alt={skill.skill}
                  className={`xl:h-14 h-8 aspect-square  object-cover cursor-pointer duration-300 m-1 ${
                    logo === "choose"
                      ? "opacity-30"
                      : logo === skill.skill || logo === "none"
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Creative Skills */}
      <div className="flex flex-col justify-center items-center gap-12 w-fit sm:ml-auto max-sm:mr-auto">
        <div
          className={`glass flex flex-col items-center text-center h-auto w-auto overflow-hidden duration-300 rounded-3xl min-w-12 min-h-12 ${
            skillType === "creative"
              ? "max-h-[400px] max-w-[80vw] p-4 pt-1"
              : "max-h-12 max-w-12 aspect-square"
          }`}
        >
          <button
            type="button"
            aria-label="Creative skills"
            title="Creative skills"
            className="cursor-pointer"
            onClick={() =>
              setSkillType(skillType === "creative" ? "" : "creative")
            }
          >
            <p
              className={`h3Size mt-[10px] ${
                skillType === "creative" ? "mb-6" : ""
              }`}
            >
              <Palette className="w-8 object-contain" />
            </p>
          </button>
          <div
            className={`flex-wrap gap-4 justify-center xl:w-[516px] h-fit duration-300 ${
              skillType === "creative"
                ? "flex opacity-100 delay-100"
                : "hidden opacity-0 delay-0"
            }`}
          >
            {creativeSkills.map((skill, i) => (
              <button
                key={i}
                type="button"
                role="option"
                title={skill.skill}
                aria-label={skill.skill}
                onClick={() => {
                  handleHover(skill);
                  setSkillType("");
                }}
              >
                <img
                  key={i}
                  src={skill.logo}
                  alt={skill.skill}
                  className={`xl:h-16 h-8 aspect-square object-cover cursor-pointer duration-300 m-1 ${
                    logo === "choose"
                      ? "opacity-30"
                      : logo === skill.skill || logo === "none"
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
