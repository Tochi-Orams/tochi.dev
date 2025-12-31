import { redirect } from "next/navigation";
import { FC } from "react";
import { slugs } from "../Types/Types";
import { getAllProjectSlugs } from "@/lib/projects";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

interface pageParams {
  params?: Promise<{ slug: slugs }>;
}

/**
 * Redirect handler for old project URLs
 * Redirects /{slug} to /projects/{slug}
 */
const page: FC<pageParams> = async ({ params }) => {
  if (!params) {
    redirect("/");
  }

  const { slug } = await params;

  // Redirect to new projects route
  redirect(`/projects/${slug}`);
};

export default page;
