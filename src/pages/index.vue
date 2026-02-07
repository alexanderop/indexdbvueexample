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
        underline
      >
        "How to Use IndexedDB in Vue Projects"
      </a>
    </p>

    <div py-6 />

    <h2 mb-2 text-lg font-semibold>
      Approaches
    </h2>
    <div flex="~ col gap-2" items-center text-sm>
      <RouterLink btn to="/vanilla">
        1. Vanilla IndexedDB API
      </RouterLink>
      <RouterLink btn to="/idb">
        2. idb (Promise wrapper)
      </RouterLink>
      <RouterLink btn to="/dexie">
        3. Dexie.js (full ORM)
      </RouterLink>
      <RouterLink btn to="/vueuse">
        4. VueUse useIDBKeyval
      </RouterLink>
      <RouterLink btn to="/persistence">
        5. Storage Persistence API
      </RouterLink>
    </div>

    <div py-6 />

    <h2 mb-2 text-lg font-semibold>
      Comparison
    </h2>
    <div overflow-x-auto>
      <table mx-auto text-left text-sm>
        <thead>
          <tr border-b="~ gray-200 dark:gray-700">
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
          <tr border-b="~ gray-200 dark:gray-700">
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
          <tr border-b="~ gray-200 dark:gray-700">
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
          <tr border-b="~ gray-200 dark:gray-700">
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
          <tr border-b="~ gray-200 dark:gray-700">
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
