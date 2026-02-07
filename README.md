# IndexedDB in Vue - Demo

Companion demo repository for the blog post **["How to Use IndexedDB in Vue Projects"](https://alexop.dev/posts/how-to-use-indexeddb-in-vue/)**.

Every code example from the blog works as a live, interactive demo you can clone and run.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Routes

| Route          | What it demonstrates                                           |
| -------------- | -------------------------------------------------------------- |
| `/`            | Landing page with comparison table (localStorage vs IndexedDB) |
| `/vanilla`     | Raw IndexedDB API — callbacks wrapped in Promises              |
| `/idb`         | `idb` library — clean Promise-based wrapper (~1.2 kB)          |
| `/dexie`       | Dexie.js — full-featured ORM-style API (~16 kB)                |
| `/vueuse`      | VueUse `useIDBKeyval` — reactive ref backed by IndexedDB       |
| `/persistence` | Storage Persistence API — request persistent storage           |

Each page has a counter that persists its value in IndexedDB. Increment, refresh the page, and the value is still there.

## Tests

```bash
pnpm test
```

Tests demonstrate two strategies from the blog:

- **`vi.mock()` approach** — mock `useIDBKeyval` with a reactive ref (see `test/vueuse-mock.test.ts`)
- **`fake-indexeddb` approach** — real IndexedDB operations against an in-memory polyfill (see `test/fake-indexeddb.test.ts`)
- **Composable tests** — each composable (vanilla, idb, Dexie) tested with fake-indexeddb

## Tech Stack

- [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
- [UnoCSS](https://unocss.dev/) for styling
- [Vitest](https://vitest.dev/) + [fake-indexeddb](https://github.com/nicedoc/fake-indexeddb) for testing
- File-based routing via [unplugin-vue-router](https://github.com/posva/unplugin-vue-router)
