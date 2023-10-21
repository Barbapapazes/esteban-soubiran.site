<script lang="ts" setup>
const { page } = useContent()
</script>

<template>
  <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
    <div
      v-for="image in page.adventures"
      :key="image.src"
      class="img-container relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl dark:bg-zinc-800 sm:w-72 sm:rounded-2xl transform"
      :class="{ 'rotate-2': image.rotate === 'right',
                '-rotate-2': image.rotate === 'left' }"
    >
      <img :src="image.src" :alt="image.alt" class="absolute h-full w-full object-cover" height="300" loading="lazy">
    </div>
  </div>
</template>
