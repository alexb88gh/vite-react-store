# Structural Contract

## Purpose
This document defines the project structure and rules for placing code.
Goal: keep code predictable, scalable, and easy to review.

## Layers
Project uses a layered structure:

- `app`: application setup and global composition.
- `pages`: route-level screens.
- `widgets`: reusable page sections composed from features/entities.
- `features`: user actions and business scenarios.
- `entities`: domain models and domain logic.
- `shared`: reusable technical and UI primitives.

Dependency direction is strict:

- `app` can import from all layers.
- `pages` can import `widgets`, `features`, `entities`, `shared`.
- `widgets` can import `features`, `entities`, `shared`.
- `features` can import `entities`, `shared`.
- `entities` can import `shared`.
- `shared` imports only from `shared`.

No reverse imports between higher and lower layers.

## Current Folder Contract
`src/` is organized as:

- `app/layouts`: top-level layouts.
- `app/providers`: root providers (router, query client, theme, etc.).
- `app/routes`: route map and route config.
- `pages/<page-name>`: route screen files.
- `entities/<entity-name>/api`: entity API calls.
- `entities/<entity-name>/hooks`: entity-level hooks.
- `entities/<entity-name>/queryKeys.ts`: entity query keys.
- `shared/api`: HTTP clients and interceptors.
- `shared/config`: env-based and static config.
- `shared/types`: common types and transport contracts.
- `shared/lib`: utility functions.
- `shared/ui/<component-name>`: base UI components.

## Placement Rules
- Put route-only code in `pages`, not in `entities`.
- Put reusable domain logic in `entities`.
- Put cross-domain use-cases in `features`.
- Put composed reusable blocks in `widgets`.
- Keep transport DTO types close to `entities` or in `shared/types` if reused globally.
- Keep HTTP client setup only in `shared/api`.

## Naming and Files
- Use `kebab-case` for file and folder names (`use-get-list.ts`).
- Use `.tsx` only when file contains JSX; otherwise use `.ts`.
- Keep one main responsibility per file.
- Add `index.ts` or `index.tsx` as a public entrypoint for module folders.

## Imports
- Use path alias `@/` for `src`.
- Import through module public API (`index.ts`) when available.
- Avoid deep imports across layers if module public entrypoint exists.

## API and Query Rules
- Each entity owns its own `queryKeys`.
- React Query hooks live in `entities/<entity>/hooks` (or `features` for scenario hooks).
- Network request functions return typed responses.
- Error handling strategy is centralized in `shared/api` interceptors plus UI fallbacks in page/feature level.

## UI Rules
- Base primitives are in `shared/ui`.
- Page layout composition is done in `pages` and `widgets`.
- Feature-specific UI should not leak into `shared/ui`.

## What Is Allowed Now
- `features` and `widgets` may stay partially empty while bootstrapping.
- New code should still follow target layer placement from day one.

## Change Process
- Any new top-level folder in `src` requires contract update.
- Any exception to dependency direction must be documented in PR description.

