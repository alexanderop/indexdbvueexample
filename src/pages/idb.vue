<script setup lang="ts">
import { useIdbCounter } from '~/composables/useIdbCounter'

const { count, inc, dec, isReady } = useIdbCounter()
</script>

<template>
  <div>
    <h1 text-2xl font-bold>
      idb Library
    </h1>
    <p mt-2 text-sm opacity-75>
      Promise-based wrapper around IndexedDB.
      Clean API, tiny bundle (~1.2 kB gzipped).
    </p>

    <div py-4 />

    <div v-if="!isReady" text-sm opacity-50>
      Loading...
    </div>
    <TheCounter
      v-else
      :count="count"
      label="idb"
      @increment="inc"
      @decrement="dec"
    />

    <div mt-4 text-xs opacity-50>
      <p>DB: <code>idb-counter-db</code></p>
      <p>Store: <code>settings</code> / Key: <code>counter</code></p>
    </div>
  </div>
</template>
