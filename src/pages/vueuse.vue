<script setup lang="ts">
import { useIDBKeyval } from '@vueuse/integrations/useIDBKeyval'

const { data: count, isFinished } = useIDBKeyval<number>('counter', 0)

function inc() {
  count.value!++
}

function dec() {
  count.value!--
}
</script>

<template>
  <div>
    <h1 text-2xl font-bold>
      VueUse useIDBKeyval
    </h1>
    <p mt-2 text-sm opacity-75>
      Simplest approach: reactive ref backed by IndexedDB.
      Auto-persists on mutation via idb-keyval.
    </p>

    <div py-4 />

    <div v-if="!isFinished" text-sm opacity-50>
      Loading...
    </div>
    <TheCounter
      v-else
      :count="count ?? 0"
      label="vueuse"
      @increment="inc"
      @decrement="dec"
    />

    <div mt-4 text-xs opacity-50>
      <p>Uses <code>idb-keyval</code> default store</p>
      <p>Key: <code>counter</code></p>
    </div>
  </div>
</template>
