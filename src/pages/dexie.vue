<script setup lang="ts">
import { useDexieCounter } from '~/composables/useDexieCounter'

const { count, inc, dec, isReady } = useDexieCounter()
</script>

<template>
  <div>
    <h1 text-2xl font-bold>
      Dexie.js
    </h1>
    <p mt-2 text-sm opacity-75>
      Full-featured IndexedDB wrapper with a fluent API.
      Great for complex schemas (~16 kB gzipped).
    </p>

    <div py-4 />

    <div v-if="!isReady" text-sm opacity-50>
      Loading...
    </div>
    <TheCounter
      v-else
      :count="count"
      label="dexie"
      @increment="inc"
      @decrement="dec"
    />

    <div mt-4 text-xs opacity-50>
      <p>DB: <code>dexie-counter-db</code></p>
      <p>Table: <code>settings</code> / Key: <code>counter</code></p>
    </div>
  </div>
</template>
