# Portfolio

This repository contains a personal portfolio website built with Next.js (App Router) and TypeScript.

It showcases projects, experience, skills, and contact information. The project is structured using the `app/` directory (Next.js App Router) and is styled with Tailwind CSS.

## Features

- Next.js (App Router) + TypeScript
- Tailwind CSS for utility-first styling
- Theme toggle (light/dark) using `next-themes`
- Framer Motion for smooth animations
- Reusable UI components (cards, buttons, badges)
- Responsive, accessible layout with a focus on performance

## Tech stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react (icons)
- next-themes (dark/light theme)

## Getting started (local)

Requirements:

- Node.js 18+ (recommended)
- npm, yarn, or pnpm

Install dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Run the development server (uses Turbopack):

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Build for production:

```bash
npm run build
npm start
```

Linting:

```bash
npm run lint
```

## Project structure (important files)

- `app/` — Next.js App Router routes and pages (entry: `app/page.tsx`)
- `src/components/` — UI components, sections (Hero, About, Projects, Contact, etc.)
- `src/components/ui/` — small design-system primitives (button, card, badge)
- `src/lib/` — utilities and helpers
- `public/` — static assets (images)
- `globals.css` — global styles (Tailwind imports)

A fuller structure can be explored under `src/` and `app/` — components are split into sections and smaller UI primitives.

## Scripts

- `npm run dev` — start development server (Turbopack)
- `npm run build` — build for production
- `npm run start` — start production server
- `npm run lint` — run linting

## Deployment

This project deploys well on Vercel (recommended) or any platform that supports Next.js. When deploying, set NODE_ENV to `production` and run the standard Next.js build process.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with improvements or fixes. If you add features, please include tests or a short description of the change.

## Notes / TODOs

- Add a `LICENSE` file if you want to publish the project under a specific license.
- Add contact links (email, LinkedIn) to the README or `app` if you want them displayed publicly.

---

If you'd like, I can add a short demo GIF, update contact info, or add a `LICENSE` file. Tell me what to include and I'll update the README accordingly.
