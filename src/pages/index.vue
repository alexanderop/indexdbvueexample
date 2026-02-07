<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-data-base inline-block />
    </div>
    <h1 mt-2 text-2xl font-bold>
      IndexedDB in Vue
    </h1>
    <p mt-2 text-sm opacity-75>
      Demo companion for the blog post
      <a
        href="https://alexop.dev/posts/how-to-use-indexeddb-in-vue/"
        target="_blank"
        rel="noreferrer"
        text-accent underline
      >
        "How to Use IndexedDB in Vue Projects"
      </a>
    </p>

    <div py-6 />

    <h2 mb-2 text-lg font-semibold>
      Pick an approach to try
    </h2>
    <div flex="~ col gap-3" mx-auto max-w-sm text-sm>
      <RouterLink to="/vanilla" block rounded-lg border="~ border" bg-card p-3 text-left transition hover:bg-card-muted>
        <span text-accent font-semibold>1. Vanilla IndexedDB API</span>
        <span mt-1 block text-xs op-60>Raw browser API with event-based callbacks</span>
      </RouterLink>
      <RouterLink to="/idb" block rounded-lg border="~ border" bg-card p-3 text-left transition hover:bg-card-muted>
        <span text-accent font-semibold>2. idb (Promise wrapper)</span>
        <span mt-1 block text-xs op-60>Thin promise-based wrapper around IndexedDB</span>
      </RouterLink>
      <RouterLink to="/dexie" block rounded-lg border="~ border" bg-card p-3 text-left transition hover:bg-card-muted>
        <span text-accent font-semibold>3. Dexie.js (full ORM)</span>
        <span mt-1 block text-xs op-60>Feature-rich IndexedDB wrapper with query API</span>
      </RouterLink>
      <RouterLink to="/vueuse" block rounded-lg border="~ border" bg-card p-3 text-left transition hover:bg-card-muted>
        <span text-accent font-semibold>4. VueUse useIDBKeyval</span>
        <span mt-1 block text-xs op-60>Reactive key-value storage with idb-keyval</span>
      </RouterLink>
      <RouterLink to="/persistence" block rounded-lg border="~ border" bg-card p-3 text-left transition hover:bg-card-muted>
        <span text-accent font-semibold>5. Storage Persistence API</span>
        <span mt-1 block text-xs op-60>Request persistent storage so data survives cleanup</span>
      </RouterLink>
    </div>

    <div py-6 />

    <h2 mb-2 text-lg font-semibold>
      Comparison
    </h2>
    <div overflow-x-auto>
      <table mx-auto text-left text-sm>
        <thead>
          <tr border-b="~ border">
            <th p-2>
              Feature
            </th>
            <th p-2>
              localStorage
            </th>
            <th p-2>
              IndexedDB
            </th>
          </tr>
        </thead>
        <tbody>
          <tr border-b="~ border">
            <td p-2>
              Storage Limit
            </td>
            <td p-2>
              ~5 MB
            </td>
            <td p-2>
              GB+ (quota-based)
            </td>
          </tr>
          <tr border-b="~ border">
            <td p-2>
              Data Types
            </td>
            <td p-2>
              Strings only
            </td>
            <td p-2>
              Structured clone (objects, blobs, etc.)
            </td>
          </tr>
          <tr border-b="~ border">
            <td p-2>
              API Style
            </td>
            <td p-2>
              Synchronous
            </td>
            <td p-2>
              Asynchronous
            </td>
          </tr>
          <tr border-b="~ border">
            <td p-2>
              Transactions
            </td>
            <td p-2>
              No
            </td>
            <td p-2>
              Yes
            </td>
          </tr>
          <tr>
            <td p-2>
              Indexes/Queries
            </td>
            <td p-2>
              No
            </td>
            <td p-2>
              Yes
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
