<script lang="ts" setup>
const { page } = useContent()

const image = ref(page.value.image)
</script>

<template>
  <article class="max-w-2xl mx-auto flex flex-col">
    <div class="flex flex-col gap-4" :class="{'mb-6': image}">
      <h1 class="dark:text-zinc-100 text-5xl font-bold tracking-tight">
        {{ page.title }}
      </h1>
      <AtomsArticleTime :datetime="page.createdAt" class="order-first" />
    </div>
    <img v-if="image" :src="image.src" :alt="image.alt" class="rounded-2xl">
    <div
      class="w-full mx-auto prose prose-zinc prose-a:font-semibold prose-a:underline prose-a:transition-all prose-a:ease-in    dark:prose-a:decoration-sky-500/30 dark:prose-a:text-sky-500  dark:prose-invert hover:dark:prose-a:decoration-sky-500">
      <slot />
    </div>
  </article>
</template>