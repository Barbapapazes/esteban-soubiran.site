<script lang="ts" setup>
defineProps<{
  small?: boolean
  image: {
    src: string
    alt: string
  }
}>()
</script>

<template>
  <div
    class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-white/10"
    :class="{
      'w-10 h-10': small, 'h-12 w-12': !small,
    }"
  >
    <img
      :src="image.src"
      :alt="image.alt"
      width="400"
      height="400"
      class="rounded-full object-contain"
      loading="lazy"
      :class="{
        'w-7 h-7': small, 'h-8 w-8': !small,
      }"
    >
  </div>
</template>
