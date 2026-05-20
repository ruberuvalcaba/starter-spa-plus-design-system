# starter-spa-plus-design-system

Frontend Platform monorepo: a React SPA + a publishable design system.

## Stack
- **Monorepo**: Turborepo + pnpm workspaces
- **Framework**: React 19 + Vite
- **Routing**: TanStack Router (file-based)
- **Data**: TanStack Query (REST)
- **State**: Zustand
- **Styling**: StyleX
- **Language**: TypeScript (strict)
- **Components**: Storybook
- **Lint/Format**: Biome
- **Unit**: Vitest + React Testing Library
- **E2E**: Playwright
- **Release**: Changesets
- **CI**: GitHub Actions

## Getting started
```bash
pnpm install
pnpm dev              # runs apps/web on http://localhost:5173
pnpm storybook        # runs apps/storybook on http://localhost:6006
pnpm test             # vitest across packages
pnpm test:e2e         # playwright on apps/web
pnpm lint             # biome
```

## Layout
```
apps/
  web/          # SPA (TanStack Router + Query + Zustand)
  storybook/    # Storybook for @acme/ui
packages/
  ui/           # Design system (@acme/ui) – StyleX components
  tsconfig/     # Shared tsconfigs
```

## Adding a UI component
1. Create `packages/ui/src/components/MyComp/` with `MyComp.tsx`, `MyComp.styles.ts`, `MyComp.test.tsx`, `MyComp.stories.tsx`, `index.ts`.
2. Re-export from `packages/ui/src/index.ts`.
3. Use in `apps/web` via `import { MyComp } from "@acme/ui"`.

## Releasing
```bash
pnpm changeset           # describe the change
pnpm version-packages    # bump versions
pnpm release             # build + publish to npm
```
