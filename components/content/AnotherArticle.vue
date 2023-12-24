<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()

const { data: article } = await useAsyncData(`articles:${props.name}`, () => queryContent(`/articles/${props.name}`).only(['title', 'description', 'cover', '_path']).findOne())
</script>

<template>
  <div class="not-prose my-8 flex flex-col gap-2">
    <p class="text-gray-500 dark:text-gray-400 font-500">
      Lire aussi :
    </p>
    <article v-if="article" class=" ring-1 ring-gray-900/5 dark:ring-white/10 rounded-xl bg-gray-300/10 dark:bg-gray-700/10 hover:ring-gray-900/10 hover:dark:ring-white/20 transition-base overflow-hidden">
      <NuxtLink :to="article._path" class="flex flex-col sm:flex-row sm:items-center">
        <img class="hidden sm:block aspect-video object-cover object-center rounded-lg w-[12rem]" :src="article.cover.src" :alt="article.cover.alt" width="1920" height="1080">
        <div class="px-4 py-4 sm:py-0 min-w-0">
          <h1 class="text-gray-800 dark:text-gray-100 font-500">
            {{ article.title }}
          </h1>
          <p class="mt-2 text-gray-500 dark:text-gray-400 text-nowrap text-ellipsis overflow-hidden">
            {{ article.description }}
          </p>
        </div>
      </NuxtLink>
    </article>
  </div>
</template>
