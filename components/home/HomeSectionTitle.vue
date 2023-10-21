<script lang="ts" setup>
defineProps<{
  icon: string
}>()
</script>

<template>
  <h2 class="flex gap-3 text-sm font-semibold">
    <span class="block h-5 w-5 text-zinc-500 dark:text-zinc-400 group-hover/section:text-zinc-800 dark:group-hover/section:text-zinc-200 transition ease-in" :class="icon" />
    <span>
      <slot />
    </span>
  </h2>
</template>
