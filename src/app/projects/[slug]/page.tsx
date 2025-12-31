import React, { FC } from "react";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import ProjectPage from "@/app/Components/Projects/ProjectPage";
import MarkdownRenderer from "@/app/Components/Projects/MarkdownRenderer";
import { slugs } from "@/app/Types/Types";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

interface pageParams {
  params?: Promise<{ slug: slugs }>;
}

const page: FC<pageParams> = async ({ params }) => {
  if (!params) {
    return <main>Invalid route</main>;
  }

  const { slug } = await params;
  const projectData = getProjectBySlug(slug);

  // Transform the markdown data to match the existing ProjectPage component expectations
  const projectContent = {
    title: projectData.title,
    info: projectData.info,
    tags: projectData.tags,
    summary: <MarkdownRenderer content={projectData.content} />, // Render markdown as React component
    pictures: projectData.pictures,
    link: projectData.link,
    slug: projectData.slug,
  };

  return (
    <main>
      <ProjectPage props={projectContent} />
    </main>
  );
};

export default page;
