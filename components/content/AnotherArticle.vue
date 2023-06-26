<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()

const { data: article } = await useAsyncData(`articles:${props.name}`, () => queryContent(`/articles/${props.name}`).only(['title', 'description', 'cover', '_path']).findOne())
</script>

<template>
  <div class="not-prose my-8 flex flex-col gap-2">
    <p class="text-reduced font-500">
      Lire aussi :
    </p>
    <article v-if="article" class=" border-base rounded-xl bg-zinc-300/10 dark:bg-zinc-700/10 hover:ring-zinc-900/10 hover:dark:ring-white/20 transition-base overflow-hidden">
      <NuxtLink :to="article._path" class="flex flex-col sm:flex-row sm:items-center">
        <img class="hidden sm:block aspect-video object-cover object-center rounded-lg w-[12rem]" :src="article.cover.src" :alt="article.cover.alt" width="1920" height="1080">
        <div class="px-4 py-4 sm:py-0 min-w-0">
          <h1 class="text-content font-500">
            {{ article.title }}
          </h1>
          <p class="mt-2 text-reduced text-nowrap text-ellipsis overflow-hidden">
            {{ article.description }}
          </p>
        </div>
      </NuxtLink>
    </article>
  </div>
</template>
