# CLAUDE.md - Swarup Kadam Portfolio

This file gives working context for AI assistants on this repository.

## Project Overview

Swarup Kadam's Portfolio is a React + TypeScript single-page site focused on:
- Neo-brutalist visual style
- Matrix-rain inspired hero effects
- Interactive terminal experience
- GitHub contribution graph display
- Responsive design and WhatsApp contact flow

Live demo: https://swarup-portfolio.vercel.app/

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router DOM v6
- Tailwind CSS
- shadcn/ui (Radix UI-based components)
- Lucide React icons
- TanStack Query
- React Hook Form + Zod
- react-github-calendar

## Local Development

Prerequisites:
- Node.js 18+
- npm or bun

Commands:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run test
```

Note: README references `http://localhost:5173`, but this repo's `vite.config.ts` currently sets dev server port `8080`.

## Project Structure

```text
src/
├── components/     # Main sections (Hero, Terminal, Contact, etc.)
│   └── ui/         # shadcn/ui primitives
├── hooks/          # Custom hooks
├── pages/          # Route pages
├── App.tsx         # App-level composition/routing
└── main.tsx        # Entry point
```

## Editing Guidelines

- Keep changes frontend-only unless explicitly requested otherwise.
- Preserve the current design direction (neo-brutalist, high-contrast, animated).
- Use existing `@/` alias imports for `src` paths.
- Prefer existing UI primitives from `src/components/ui/`.
- Keep section components modular under `src/components/`.
- Add/update tests with behavior changes when practical.

## High-Impact Components

- `src/components/HeroSection.tsx`: matrix-style animated hero area.
- `src/components/Terminal.tsx`: interactive terminal behavior.
- `src/components/ContactSection.tsx`: contact and WhatsApp integration.
- `src/components/GithubGraph.tsx`: GitHub contribution graph.
- `src/components/SectionBlock.tsx`: consistent section wrapper/animation.

## Contribution Notes

When updating portfolio content, keep links and personal profile details consistent with `README.md`.
