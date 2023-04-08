<script lang="ts" setup>
const { data: articles } = await useArticles()
</script>

<template>
  <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
    <h2 class="sr-only">
      <slot />
    </h2>
    <div class="flex max-w-3xl flex-col space-y-16">
      <ArticlesCard v-for="article in articles" :key="article._path" :article="article" />
    </div>
  </section>
</template>
