import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { slugs } from "@/app/Types/Types";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export interface ProjectFrontmatter {
  title: string;
  slug: slugs;
  info: {
    name: string;
    type: string;
    role: string;
    status: string;
  };
  tags: string[];
  pictures: string[];
  link: string;
}

export interface ProjectData extends ProjectFrontmatter {
  content: string;
}

/**
 * Get all project slugs for static generation
 */
export function getAllProjectSlugs(): slugs[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, "") as slugs);
}

/**
 * Get project data by slug
 */
export function getProjectBySlug(slug: string): ProjectData {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    ...(data as ProjectFrontmatter),
    content,
  };
}

/**
 * Get all projects data
 */
export function getAllProjects(): ProjectData[] {
  const slugs = getAllProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug));

  return projects;
}
