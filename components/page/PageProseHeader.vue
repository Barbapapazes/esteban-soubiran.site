<script lang="ts" setup>
defineProps<{
  title: string,
  datePublished: string
  cover?: {
    src: string,
    alt: string
  }
}>()
</script>

<template>
  <div class="max-w-prose w-full mx-auto">
    <div class="flex flex-col gap-4">
      <PageTitle class="mt-4">
        {{ title }}
      </PageTitle>
      <PageDate :datetime="datePublished" class="order-first" />
    </div>

    <img
      v-if="cover"
      :src="cover.src"
      :alt="cover.alt"
      class="mt-6 rounded-2xl"
      width="1920"
      height="1080"
    >
  </div>
</template>
