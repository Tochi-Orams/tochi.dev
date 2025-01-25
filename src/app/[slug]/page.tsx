import React, { FC } from "react";
import { projectList } from "../Components/Projects/projectList";
import ProjectPage from "../Components/Projects/ProjectPage";
import { slugs } from "../Types/Types";

const getProjects = () => {
  const projects = projectList.map((project) => {
    return {
      title: project.title,
      info: project.info,
      tags: project.tags,
      summary: project.summary,
      pictures: project.pictures,
      link: project.link,
      slug: project.slug,
    };
  });

  return projects;
};

export async function generateStaticParams() {
  const projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const getProjectContents = (slug: string) => {
  const content = projectList.filter((proj) => {
    return proj.slug === slug;
  });

  return content[0];
};

interface pageParams {
  params?: Promise<{ slug: slugs }>;
}

const page: FC<pageParams> = async ({ params }) => {
  if (!params) {
    // Handle the case where `params` is undefined, e.g., return an error or default content
    return <main>Invalid route</main>;
  }

  const { slug } = await params;
  const projectContent = getProjectContents(slug);

  return (
    <main>
      <ProjectPage props={projectContent} />
    </main>
  );
};

export default page;
