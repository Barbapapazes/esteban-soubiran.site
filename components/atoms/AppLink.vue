<script lang="ts" setup>
const props = defineProps<{
  to: string
  large?: boolean
}>()

const route = useRoute()

const isActive = computed(() => route.path === props.to)
</script>

<template>
  <NuxtLink
    :to="to"
    class="relative block px-3 py-2 transition hover:text-sky-500 hover:dark:text-sky-400"
    :class="{ 'text-sm': !large, 'text-base px-3 py-2 ': large, 'text-sky-500 dark:text-sky-400': isActive }"
  >
    <slot />
  </NuxtLink>
</template>
