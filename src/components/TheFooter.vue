<script setup lang="ts">
</script>

<template>
  <nav flex="~ gap-3 wrap" mt-6 justify-center text-sm>
    <RouterLink btn to="/">
      Home
    </RouterLink>
    <RouterLink btn to="/vanilla">
      Vanilla
    </RouterLink>
    <RouterLink btn to="/idb">
      idb
    </RouterLink>
    <RouterLink btn to="/dexie">
      Dexie
    </RouterLink>
    <RouterLink btn to="/vueuse">
      VueUse
    </RouterLink>
    <RouterLink btn to="/persistence">
      Persistence
    </RouterLink>
    <button icon-btn title="Toggle dark mode" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>
  </nav>
</template>
