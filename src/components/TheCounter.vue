<script setup lang="ts">
defineProps<{
  count: number
  label?: string
}>()

defineEmits<{
  increment: []
  decrement: []
}>()
</script>

<template>
  <div flex="~ gap-2" items-center justify-center py-4>
    <span v-if="label" text-sm opacity-75>{{ label }}</span>
    <button data-testid="dec" class="dec m-1 text-sm btn" @click="$emit('decrement')">
      -
    </button>
    <span data-testid="count" text-2xl font-mono>{{ count }}</span>
    <button data-testid="inc" class="inc m-1 text-sm btn" @click="$emit('increment')">
      +
    </button>
  </div>
</template>
