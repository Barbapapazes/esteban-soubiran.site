<script lang="ts" setup>
const { data: articles } = await useAsyncData('articles', () => queryContent('/articles/').find())
</script>

<template>
  <section class="relative px-4 sm:px-8 lg:px-16">
    <div class="max-w-screen-xl mx-auto sm:px-8">
      <div class=" max-w-2xl lg:max-w-5xl mx-auto">
        <h2 class="sr-only">Liste des articles</h2>
        <ArticleCard v-for="article in articles" :article="article" :key="article._path" />
      </div>
    </div>
  </section>
</template>