<script lang="ts" setup>
defineProps<{
  as?: any
  hover?: boolean
}>()
</script>

<template>
  <component :is="as ?? 'div'" class="rounded-full backdrop-blur bg-white/90 dark:bg-gray-800/90 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 dark:ring-white/10" :class="{ 'hover:ring-gray-900/10 hover:dark:ring-white/20 transition ease-in': hover }">
    <slot />
  </component>
</template>
