"use client";

import { FC } from "react";

interface props {
  tags: string[];
  view: "overview" | "gallery";
  info: {
    type: string;
    role: string;
    status: string;
    name: string;
  };
}

const ProjectDetails: FC<props> = ({ tags, view, info }) => {
  return (
    <section
      className={`glass overflow-clip duration-1000 lg:h-[75vh] max-lg:w-full max-lg:mb-10 ${
        view === "overview"
          ? "w-1/3 p-6 opacity-100 pointer-events-auto"
          : "w-0 p-0 opacity-0 pointer-events-none"
      }`}
    >
      <div className="code w-fit">
        <h4 className="code-text mb-1 !text-[#dbaf74]">{`${info.name} {`}</h4>
        <div className="ml-6 flex flex-col gap-1">
          <h4 className="code-text">
            project-type<i className="!text-white pl-[2px]">:</i>{" "}
            <em>{info.type}</em>
            <i className="!text-white pl-[2px]">;</i>
          </h4>
          <h4 className="code-text">
            role<i className="!text-white pl-[2px]">:</i> <em>{info.role}</em>
            <i className="!text-white pl-[2px]">;</i>
          </h4>
          <h4 className="code-text">
            status<i className="!text-white pl-[2px]">:</i>{" "}
            <em>{info.status}</em>
            <i className="!text-white pl-[2px]">;</i>
          </h4>
        </div>
        <h4 className="!text-[#dbaf74]">{`}`}</h4>
      </div>

      <div className="code mt-6">
        <p className="code-text mb-3 !text-[#4f964f] !font-medium">{`// Skills used`}</p>
        <div className="flex flex-wrap w-fit gap-2">
          {tags.map((tag, i) => (
            <p
              key={i}
              className="bg-white/30 xl:px-3 px-2 py-1 rounded-full w-fit xl:text-lg text-sm"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
