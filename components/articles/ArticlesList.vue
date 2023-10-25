<script lang="ts" setup>
const { data: articles } = await useAsyncData('content:list:articles', () => queryContent('/articles/').sort({ datePublished: -1 }).only(['_path', 'title', 'datePublished', 'description']).find())
</script>

<template>
  <section>
    <h2 class="sr-only">
      <slot />
    </h2>
    <div class="flex max-w-3xl flex-col space-y-16">
      <ArticlesCard v-for="article in articles" :key="article._path" :article="article" />
    </div>
  </section>
</template>
