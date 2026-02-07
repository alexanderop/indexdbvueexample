<script setup lang="ts">
import { useVanillaIDB } from '~/composables/useVanillaIDB'

const { count, inc, dec, isReady } = useVanillaIDB()
</script>

<template>
  <div>
    <h1 text-2xl font-bold>
      Vanilla IndexedDB
    </h1>
    <p mt-2 text-sm opacity-75>
      Raw IndexedDB API with callbacks wrapped in Promises.
      Verbose but zero dependencies.
    </p>

    <div py-4 />

    <div v-if="!isReady" text-sm opacity-50>
      Loading...
    </div>
    <TheCounter
      v-else
      :count="count"
      label="vanilla"
      @increment="inc"
      @decrement="dec"
    />

    <div mt-4 text-xs opacity-50>
      <p>DB: <code>vanilla-counter-db</code></p>
      <p>Store: <code>settings</code> / Key: <code>counter</code></p>
    </div>
  </div>
</template>
