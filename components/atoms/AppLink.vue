<script lang="ts" setup>
defineProps<{
  large?: boolean
}>()
</script>

<template>
  <NuxtLink class="inline-block px-3 py-2 dark:text-zinc-200 font-semibold hover:text-sky-500 transition-colors ease-in"
    :class="{'text-sm': !large, 'text-base': large}">
    <slot />
  </NuxtLink>
</template>

<style scoped>
.router-link-active {
  @apply text-sky-500;
}
</style>