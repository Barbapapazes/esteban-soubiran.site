<script lang="ts" setup>
defineProps<{
  large?: boolean
}>()
</script>

<template>
  <NuxtLink class="inline-block dark:text-zinc-200 font-semibold hover:text-sky-500 transition-colors ease-in"
    :class="{'text-sm': !large, 'text-base px-3 py-2 ': large}" exact-active-class="dark:text-sky-500">
    <slot />
  </NuxtLink>
</template>