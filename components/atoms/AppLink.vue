<script lang="ts" setup>
defineProps<{
  large?: boolean
}>()
</script>

<template>
  <NuxtLink class="relative block px-3 py-2 transition hover:text-sky-500 hover:dark:text-sky-400"
    :class="{ 'text-sm': !large, 'text-base px-3 py-2 ': large }" exact-active-class="text-sky-500 dark:text-sky-400">
    <slot />
  </NuxtLink>
</template>