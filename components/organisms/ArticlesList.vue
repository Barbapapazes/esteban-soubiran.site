<script lang="ts" setup>
const { data: articles } = await useAsyncData('articles', () => queryContent('/articles/').find())
</script>

<template>
  <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
    <h2 class="sr-only">
      <slot></slot>
    </h2>
    <div class="flex max-w-3xl flex-col space-y-16">
      <MoleculesArticleCard v-for="article in articles" :article="article" :key="article._path" />
    </div>
  </section>
</template>