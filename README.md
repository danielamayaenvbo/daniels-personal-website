# Daniel Amayaenvbo — Personal Website

My personal website. I'm a Drexel Software Engineering student focused on reliable systems and applied ML.

**Live:** https://danielamayaenvbo.github.io/daniels-personal-website/

## Features

- Experience, selected projects, and skills, all driven from one content file (`src/content.ts`)
- Light and dark themes that follow the system setting, with a manual toggle
- Sticky navigation that highlights the current section
- Responsive layout down to small phones
- Respects reduced-motion preferences

## Stack

- React 19 and TypeScript
- Vite for development and production builds
- Vanilla CSS with design tokens for theming
- GitHub Actions for lint/build checks and GitHub Pages deploys

## Run locally

```bash
npm install
npm run dev
```

## Update content

Edit `src/content.ts` to change experience, projects, highlights, or skills. Pushing to `main` deploys the site automatically.
