<script lang="ts" setup>
defineProps<{
  image: {
    src: string;
    alt: string;
  };
}>();
</script>

<template>
  <div
    class="h-10 w-10 shadow-md shadow-zinc-800/5 border border-zinc-700/50 dark:bg-zinc-800 rounded-full flex flex-row justify-center items-center">
    <img :src="image.src" :alt="image.alt" class="rounded-full h-7 w-7" loading="lazy">
  </div>
</template>