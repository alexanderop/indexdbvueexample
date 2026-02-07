<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isPersisted = ref<boolean | null>(null)
const quota = ref<{ usage: number, quota: number } | null>(null)
const requesting = ref(false)

onMounted(async () => {
  if (navigator.storage && navigator.storage.persisted) {
    isPersisted.value = await navigator.storage.persisted()
  }
  if (navigator.storage && navigator.storage.estimate) {
    const estimate = await navigator.storage.estimate()
    quota.value = {
      usage: estimate.usage ?? 0,
      quota: estimate.quota ?? 0,
    }
  }
})

async function requestPersistence() {
  requesting.value = true
  if (navigator.storage && navigator.storage.persist) {
    isPersisted.value = await navigator.storage.persist()
  }
  requesting.value = false
}

function formatBytes(bytes: number): string {
  if (bytes === 0)
    return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${Number.parseFloat((bytes / k ** i).toFixed(1))} ${sizes[i]}`
}
</script>

<template>
  <div>
    <h1 text-2xl font-bold>
      Storage Persistence API
    </h1>
    <p mt-2 text-sm opacity-75>
      By default, browsers can evict IndexedDB data under storage pressure.
      The Storage API lets you request persistent storage.
    </p>

    <div py-4 />

    <div mx-auto max-w-sm text-left space-y-3>
      <div>
        <span font-semibold>Persisted:</span>
        <span ml-2>
          <span v-if="isPersisted === null" opacity-50>Checking...</span>
          <span v-else-if="isPersisted" text-success>Yes</span>
          <span v-else text-warning>No (best-effort)</span>
        </span>
      </div>

      <div v-if="quota">
        <span font-semibold>Usage:</span>
        <span ml-2>{{ formatBytes(quota.usage) }} / {{ formatBytes(quota.quota) }}</span>
      </div>

      <div v-if="isPersisted === false">
        <button text-sm btn :disabled="requesting" @click="requestPersistence">
          {{ requesting ? 'Requesting...' : 'Request Persistent Storage' }}
        </button>
        <p mt-2 text-xs opacity-50>
          Chrome auto-grants for installed PWAs and sites with high engagement.
          Firefox shows a permission prompt. Safari always grants.
        </p>
      </div>

      <div v-if="isPersisted" text-xs opacity-50>
        Storage is already persistent. The browser will not evict your data
        under storage pressure.
      </div>
    </div>
  </div>
</template>
