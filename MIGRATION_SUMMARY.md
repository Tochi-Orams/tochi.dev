# Project Migration: Dynamic Routes to Markdown Blog Structure

## Overview

Successfully migrated the project system from a hardcoded TypeScript array (`projectList.tsx`) to a markdown-based blog structure. This change improves content management, enables easier editing, and follows modern blog/CMS patterns.

## Changes Made

### 1. Dependencies Added

```bash
npm install gray-matter react-markdown remark remark-html
```

- **gray-matter**: Parse YAML frontmatter from markdown files
- **react-markdown**: Render markdown content as React components
- **remark** & **remark-html**: Markdown processing utilities

### 2. Directory Structure Created

```
src/
├── lib/
│   └── projects.ts              # Utility functions for reading markdown files
├── content/
│   └── projects/                # Markdown files for each project
│       ├── rose-picnic.md
│       ├── toronto-musicians-hub.md
│       ├── quantumapps.md
│       ├── langulife.md
│       ├── little-lemon-reservations.md
│       ├── pixelpraise.md
│       ├── tasqr.md
│       ├── sickkids-picu-clinic.md
│       └── techinto.md
└── app/
    ├── projects/
    │   └── [slug]/
    │       └── page.tsx         # New markdown-based dynamic route
    └── [slug]/
        └── page.tsx             # Redirect handler (old → new URLs)
```

### 3. Files Created

#### `src/lib/projects.ts`

- **Purpose**: Utility functions for reading and parsing project markdown files
- **Functions**:
  - `getAllProjectSlugs()`: Get all project slugs for static generation
  - `getProjectBySlug(slug)`: Get single project data by slug
  - `getAllProjects()`: Get all projects data

#### `src/content/projects/*.md` (9 files)

- **Format**: Markdown with YAML frontmatter
- **Frontmatter structure**:

  ```yaml
  ---
  title: "Project Title"
  slug: "project-slug"
  info:
    name: ".projectName"
    type: "project type"
    role: "your role"
    status: "ongoing/completed"
  tags:
    - "Tag 1"
    - "Tag 2"
  pictures:
    - "/path/to/image1.png"
    - "/path/to/image2.png"
  link: "https://external-link.com"
  ---
  Project content in markdown...
  ```

#### `src/app/Components/Projects/MarkdownRenderer.tsx`

- **Purpose**: Component to render markdown content with custom styling
- **Features**:
  - Handles HTML tags (`<br />`, `<em>`) within markdown
  - Custom paragraph spacing (`mb-4`)
  - Wrapper div for additional styling

#### `src/app/projects/[slug]/page.tsx`

- **Purpose**: New dynamic route for rendering project pages from markdown
- **Features**:
  - Uses `generateStaticParams()` for static site generation
  - Reads markdown files via `getProjectBySlug()`
  - Renders content using `MarkdownRenderer` component
  - Maintains compatibility with existing `ProjectPage` component

### 4. Files Modified

#### `src/app/[slug]/page.tsx`

- **Change**: Converted to redirect handler
- **Behavior**: Redirects `/{slug}` → `/projects/{slug}`
- **Purpose**: Maintains backward compatibility with old URLs

#### `src/app/Components/Projects/ProjectConstants.ts`

- **Change**: Updated all project links to use `/projects/` prefix
- **Examples**:
  - `/rose-picnic` → `/projects/rose-picnic`
  - `/quantumapps` → `/projects/quantumapps`
  - etc. (16 links total updated)

### 5. Routing Changes

**Before:**

```
www.tochi.dev/rose-picnic
www.tochi.dev/quantumapps
```

**After:**

```
www.tochi.dev/projects/rose-picnic   (new canonical URL)
www.tochi.dev/projects/quantumapps   (new canonical URL)
```

**Backward Compatibility:**

- Old URLs (`/rose-picnic`) automatically redirect to new URLs (`/projects/rose-picnic`)
- No broken links for existing users or search engines

## Benefits

✅ **Easier Content Management**: Edit projects in markdown instead of JSX  
✅ **Separation of Concerns**: Content files separate from code  
✅ **Non-Technical Friendly**: Content editors can update markdown without coding  
✅ **Version Control**: Track content changes independently  
✅ **Scalability**: Add new projects by creating markdown files  
✅ **Blog-Like Structure**: Standard CMS/blog pattern  
✅ **Static Generation**: Maintains Next.js SSG performance  
✅ **SEO Friendly**: Clean URLs with `/projects/` structure

## How to Add New Projects

1. Create new markdown file: `src/content/projects/new-project.md`
2. Add frontmatter with project metadata
3. Write project description in markdown
4. Add project slug to TypeScript type: `src/app/Types/Types.ts`
5. Rebuild the site: `npm run build`

Example new project file:

```markdown
---
title: "New Project"
slug: "new-project"
info:
  name: ".newProject"
  type: "freelance"
  role: "developer"
  status: "ongoing"
tags:
  - "React"
  - "TypeScript"
pictures:
  - "/Projects/NP1.png"
link: "https://example.com"
---

Project description goes here...
```

## Testing

✅ Build completed successfully: `npm run build`  
✅ All 9 projects migrated  
✅ All project links updated throughout the site  
✅ Redirect functionality implemented  
✅ Static generation working correctly

## Notes

- The `projectList.tsx` file can be kept for reference or removed
- All components (`ProjectPage`, `ProjectDetails`, `ProjectContent`, etc.) remain unchanged
- Markdown supports HTML tags like `<br />` and `<em>` for formatting
- React-markdown handles rendering with custom component mappings

## Maintenance

To update project content:

1. Navigate to `src/content/projects/`
2. Edit the relevant `.md` file
3. Rebuild: `npm run build`
4. Deploy changes

No code changes required for content updates! 🎉
