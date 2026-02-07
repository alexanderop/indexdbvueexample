<script setup lang="ts">
useHead({
  title: 'IndexedDB in Vue - Demo',
  meta: [
    {
      name: 'description',
      content: 'Demo companion for the blog post "How to Use IndexedDB in Vue Projects"',
    },
    {
      name: 'theme-color',
      content: '#212737',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
