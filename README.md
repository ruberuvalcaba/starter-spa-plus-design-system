# starter-spa-plus-design-system

Frontend Platform monorepo: a React SPA + a publishable design system.

## Tech Stack

| Category             | Technology                     |
| -------------------- | ------------------------------ |
| **Monorepo**         | Turborepo + pnpm workspaces    |
| **Framework**        | React 19 + Vite                |
| **Routing**          | TanStack Router (file-based)   |
| **Data Fetching**    | TanStack Query (REST)          |
| **State Management** | Zustand                        |
| **Styling**          | StyleX                         |
| **Language**         | TypeScript (strict)            |
| **Components**       | Storybook                      |
| **Lint/Format**      | Biome                          |
| **Unit Testing**     | Vitest + React Testing Library |
| **E2E Testing**      | Playwright                     |
| **Release**          | Changesets                     |
| **CI/CD**            | GitHub Actions                 |

## Quick Start

```bash
pnpm install
pnpm dev              # runs apps/web on http://localhost:5173
pnpm storybook        # runs apps/storybook on http://localhost:6006
pnpm test             # vitest across packages
pnpm test:e2e         # playwright on apps/web
pnpm lint             # biome
```

## Quick Layout

```
apps/
  web/          # SPA (TanStack Router + Query + Zustand)
  storybook/    # Storybook for @ruflas/ui
packages/
  ui/           # Design system (@ruflas/ui) – StyleX components
  tsconfig/     # Shared tsconfigs
```

## Project Structue

```
starter-spa-design-system/
├── apps/
│   ├── web/                                # Main SPA
│   │   ├── src/
│   │   │   ├── app/                        # Providers/bootstrap/config
│   │   │   ├── routes/                     # TanStack Router routes
│   │   │   ├── features/                   # Feature/domain modules
│   │   │   │   ├── auth/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── users/
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── components/                 # App-specific reusable components
│   │   │   ├── hooks/                      # App hooks
│   │   │   ├── services/                   # API layer / REST clients
│   │   │   ├── stores/                     # Zustand stores
│   │   │   ├── lib/                        # Helpers/utilities
│   │   │   ├── styles/                     # Global app styles
│   │   │   ├── types/                      # App-only TS types
│   │   │   ├── config/                     # Environment/app config
│   │   │   └── main.tsx
│   │   │
│   │   ├── public/
│   │   ├── tests/
│   │   │   ├── e2e/
│   │   │   └── mocks/
│   │   │
│   │   ├── .env
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   ├── storybook/                          # Storybook application
│   │   ├── .storybook/
│   │   │   ├── main.ts
│   │   │   ├── preview.ts
│   │   │   └── manager.ts
│   │   │
│   │   ├── public/
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│
├── packages/
│   ├── ui/                                 # Publishable design system
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.styles.ts
│   │   │   │   │   ├── Button.test.tsx
│   │   │   │   │   ├── Button.stories.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   │
│   │   │   │   ├── Input/
│   │   │   │   ├── Modal/
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── primitives/                 # Box/Flex/Text/etc
│   │   │   ├── hooks/
│   │   │   ├── themes/
│   │   │   ├── tokens/                     # StyleX tokens
│   │   │   ├── styles/
│   │   │   ├── utils/
│   │   │   ├── types/
│   │   │   └── index.ts
│   │   │
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   │
│   ├── tsconfig/                           # Shared TS configs
│   │   ├── base.json
│   │   ├── react-library.json
│   │   └── vite-app.json
│
├── .changeset/                             # Package versioning/release notes
├── .github/
│   └── workflows/                          # GitHub Actions
│
├── biome.json
├── turbo.json
├── pnpm-workspace.yaml
├── package.json
├── README.md
└── .gitignore
```

## Adding a UI component

1. Create `packages/ui/src/components/MyComp/` with `MyComp.tsx`, `MyComp.styles.ts`, `MyComp.test.tsx`, `MyComp.stories.tsx`, `index.ts`.
2. Re-export from `packages/ui/src/index.ts`.
3. Use in `apps/web` via `import { MyComp } from "@ruflas/ui"`.

## Releasing

```bash
pnpm changeset           # describe the change
pnpm version-packages    # bump versions
pnpm release             # build + publish to npm
```
