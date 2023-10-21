<script lang="ts" setup>
defineProps<{
  to: string
  title: string
  description: string
  date: string | Date
  dateTerm: string
  cover?: {
    src: string
    alt: string
  }
}>()
</script>

<template>
  <article class="group relative flex flex-col sm:flex-row gap-2">
    <img
      v-if="cover"
      :src="cover.src"
      :alt="cover.alt"
      width="1920"
      height="1080"
      class="relative z-10 aspect-video sm:w-60 object-cover object-center rounded-lg"
    >
    <div class="grid gap-y-2">
      <CardTitle :to="to">
        {{ title }}
      </CardTitle>
      <CardDescription>
        {{ description }}
      </CardDescription>
      <CardDate :date="date" :date-term="dateTerm" class="row-start-1" />
    </div>
  </article>
</template>
