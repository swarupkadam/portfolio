# Swarup Kadam Portfolio

Modern developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

[Live Demo](https://swarup-portfolio.vercel.app/)  
[Issues](https://github.com/swarupkadam/portfolio/issues)

## Current Highlights

- Interactive terminal overlay with quick commands (`help`, `about`, `skills`, `projects`, `contact`).
- Neo-brutalist style system with responsive layouts.
- Matrix-style animated hero background and typewriter role rotation.
- GitHub contribution calendar integration.
- Contact section with email copy action and WhatsApp message flow.
- Sound feedback hooks for key UI interactions.

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS + shadcn/ui (Radix primitives)
- React Router
- TanStack Query
- React Hook Form + Zod
- Vitest + Testing Library
- ESLint + Prettier

## Repo Structure

The actual app lives in `Swarup_portfolio/`.

```text
Portfolio/
├── README.md
└── Swarup_portfolio/
    ├── src/
    │   ├── components/
    │   ├── hooks/
    │   ├── pages/
    │   ├── App.tsx
    │   └── main.tsx
    ├── public/
    ├── scripts/
    └── package.json
```

## Getting Started

```bash
git clone https://github.com/swarupkadam/portfolio.git
cd portfolio/Swarup_portfolio
npm install
npm run dev
```

Open `http://localhost:5173`.

## Scripts

Run these from `Swarup_portfolio/`:

```bash
npm run dev          # start local dev server
npm run build        # production build
npm run preview      # preview production build
npm run lint         # run eslint
npm run test         # run vitest once
npm run test:watch   # run vitest in watch mode
npm run type-check   # run TypeScript checks
npm run format       # format code with prettier
```

## Contact

- LinkedIn: https://www.linkedin.com/in/swarupkadam/
- GitHub: https://github.com/swarupkadam
- Email: kadamswarupas@gmail.com
- Instagram: https://www.instagram.com/swarup_only/
- Blog: https://swarupkadam.hashnode.dev/
