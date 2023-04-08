<script lang="ts" setup>
defineProps<{
  sectionClass: string
  srTitle: string
  images: {
    src: string
    alt: string
    left?: boolean
    right?: boolean
  }[]
}>()
</script>

<template>
  <section :class="sectionClass">
    <h2 class="sr-only">
      {{ srTitle }}
    </h2>
    <HomePictures :images="images" />
  </section>
</template>
