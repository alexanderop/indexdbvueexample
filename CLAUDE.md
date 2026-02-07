# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Dev server on :3333
pnpm build            # Production build (vite build, not vite-ssg)
pnpm lint             # ESLint (auto-fixes via @antfu/eslint-config with UnoCSS + formatters)
pnpm test             # Vitest in watch mode
pnpm test:unit        # Same as above
pnpm typecheck        # vue-tsc --noEmit

# Run a single test file
pnpm vitest test/vanilla-counter.test.ts
# Run tests matching a name
pnpm vitest -t "increments the counter"

# E2E (Cypress)
pnpm test:e2e         # Opens Cypress (requires dev server or build+preview first)
```

## Architecture

Companion demo for the blog post "How to Use IndexedDB in Vue Projects". Each route demonstrates a different IndexedDB approach through a persisted counter.

**Composables** (`src/composables/`) — each returns `{ count, inc, dec, isReady }`:

- `useVanillaIDB` — raw IndexedDB API with Promise wrappers
- `useIdbCounter` — uses the `idb` library
- `useDexieCounter` — uses Dexie.js

**Pages** (`src/pages/`) — file-based routing via unplugin-vue-router:

- `vanilla.vue`, `idb.vue`, `dexie.vue` use the composables above
- `vueuse.vue` uses `useIDBKeyval` from `@vueuse/integrations` directly (no composable)
- `persistence.vue` demonstrates the Storage Persistence API

**Shared component**: `TheCounter.vue` receives `count` as prop, emits `increment`/`decrement`. Uses `data-testid` attributes (`count`, `inc`, `dec`) for test selectors.

**Auto-imports**: Vue, VueUse, vue-router, and all composables in `src/composables/` are auto-imported (unplugin-auto-import). Components are auto-registered (unplugin-vue-components).

**Layouts**: `src/layouts/` — applied via vite-plugin-vue-layouts.

**Styling**: UnoCSS with attributify mode. Custom color tokens defined via CSS variables in `src/styles/main.css`, mapped in `uno.config.ts`. Shortcuts `btn` and `icon-btn` defined in UnoCSS config.

## Testing

Unit tests use **jsdom** environment with **fake-indexeddb** (imported in `test/setup.ts`).

Two testing strategies:

1. **fake-indexeddb** — real IndexedDB operations against in-memory polyfill. State persists across tests in the same file, so assert relative changes (before/after), not absolute values.
2. **vi.mock** — mock `@vueuse/integrations/useIDBKeyval` with a reactive ref. See `test/vueuse-mock.test.ts`.

Composable tests mount the page component directly and interact via `data-testid` selectors.

## Dependency Management

Uses pnpm workspace catalogs (`pnpm-workspace.yaml`) for centralized version management. Dependencies reference `catalog:frontend`, `catalog:dev`, or `catalog:build` instead of version strings.

Pre-commit hook: `simple-git-hooks` runs `lint-staged` which applies `eslint --fix` to all staged files.
