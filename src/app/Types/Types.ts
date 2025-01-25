import { ReactNode } from "react";

export type modalStatus = "success" | "fail" | "";

export type projectType = "web" | "mobile" | "";

export type projectParams = {
  title: string;
  info: {
    name: string;
    type: string;
    role: string;
    status: string;
  };
  tags: string[];
  summary: ReactNode;
  pictures: string[];
  link: string;
  slug: slugs;
};

export type slugs =
  | "quantumapps"
  | "techinto"
  | "little-lemon-reservations"
  | "toronto-musicians-hub"
  | "rose-picnic"
  | "sickkids-picu-clinic"
  | "pixelpraise"
  | "langulife"
  | "tasqr";
