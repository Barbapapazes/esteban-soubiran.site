<script lang="ts" setup>
const { data: articles } = await useAsyncData('articles', () => queryContent('/articles/').find())
</script>

<template>
  <section>
    <h2 class="sr-only">Liste des articles</h2>
    <ArticleCard v-for="article in articles" :article="article" :key="article._path" />

    <pre class="text-white">
      {{ articles }}
    </pre>
  </section>
</template>