<script lang="ts" setup>
defineProps<{
  images: {
    src: string
    alt: string
    left?: boolean
    right?: boolean
  }[]
}>()
</script>

<template>
  <section>
    <h2 class="sr-only">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </h2>
    <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div v-for="image in $props.images" :key="image.src"
        class="img-container relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl dark:bg-zinc-800 sm:w-72 sm:rounded-2xl transform"
        :class="{'rotate-2': image.right, '-rotate-2': image.left}">
        <img :src="image.src" :alt="image.alt" class="absolute h-full w-full object-cover" height="300" loading="lazy">
      </div>
    </div>
  </section>
</template>