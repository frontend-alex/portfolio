# Portfolio

A personal portfolio and Markdown-backed blog built with Next.js.

## Current status

Historical public portfolio implementation. This repository is not established as the source of the current aiivanov.dev deployment.

## Features and implementation

- Landing-page sections for personal introduction and work.
- About and blog pages with individual Markdown article rendering.
- GSAP/SplitType animation dependencies and reusable page components.
- Theme and responsive styling with Tailwind CSS.

## Technology

Next.js 14.1, React 18, JavaScript, Tailwind CSS, GSAP, gray-matter, and Markdown rendering libraries.

## Repository map

| Path | Purpose |
| --- | --- |
| [src/app](<src/app>) | Page routes and layouts |
| [src/app/page.js](<src/app/page.js>) | Landing-page composition |
| [src/app/blog](<src/app/blog>) | Blog index and dynamic article route |
| [blogposts](<blogposts>) | Markdown articles |
| [package.json](<package.json>) | Scripts and dependencies |

## Local setup

```bash
git clone https://github.com/frontend-alex/portfolio.git
cd portfolio
npm install
npm run dev
```

Use a Node.js runtime compatible with the checked-in Next.js 14.1 dependencies and open http://localhost:3000. Edit the landing-page components for profile content and blogposts for articles. Keep article metadata consistent with the existing files and the blog route's parser.

## Verification

The manifest provides the following checks:

```bash
npm run lint
npm run build
```

These commands were checked against the manifest; builds, browser flows, and external services were not executed for this documentation update.

Manually check mobile layout, light/dark themes, article navigation, and animations.

## Limitations and next steps

- This guide describes this checkout and does not claim the current live website is built from it.
- Content and dependency versions reflect an older implementation; review them before reuse.
- No project-specific automated test script is declared.
- Accessibility and animation behavior require browser review.

## Code review starting points

- [src/app/page.js](<src/app/page.js>)
- [src/app/blog/[id]/page.js](<src/app/blog/[id]/page.js>)
- [blogposts](<blogposts>)
