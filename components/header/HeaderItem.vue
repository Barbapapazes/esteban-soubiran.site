<script lang="ts" setup>
defineProps<{
  as?: any
  hover?: boolean
}>()
</script>

<template>
  <Component :is="as ?? 'div'" class="rounded-full bg-blur shadow-base border-base" :class="{ 'hover:ring-zinc-900/10 hover:dark:ring-white/20 transition-base': hover }">
    <slot />
  </Component>
</template>
