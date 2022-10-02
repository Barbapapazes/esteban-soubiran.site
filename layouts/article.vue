<script lang="ts" setup>
const { page } = useContent()

const image = ref(page.value.image)
const createdAt = ref(new Date(page.value.createdAt))
</script>

<template>
  <article class="max-w-2xl mx-auto flex flex-col">
    <div class="flex flex-col gap-4">
      <h1 class="dark:text-zinc-100 text-5xl font-bold tracking-tight">
        {{ page.title }}
      </h1>
      <time class="order-first flex flex-row items-center text-base dark:text-zinc-500 font-semibold">
        <span class="h-4 w-0.5 rounded-full dark:bg-zinc-500"></span>
        <span class="ml-3">
          {{ createdAt.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) }}
        </span>
      </time>
    </div>
    <img v-if="image" :src="image.src" :alt="image.alt" class="mt-6 rounded-2xl">
    <div class="mt-6 mx-auto prose w-full">
      <slot />
    </div>
  </article>
</template>