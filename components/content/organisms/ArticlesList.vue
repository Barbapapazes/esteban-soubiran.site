<script lang="ts" setup>
const { data: articles } = await useAsyncData('articles', () => queryContent('/articles/').find())
</script>

<template>
  <div class="flex flex-col gap-16">
    <ArticleCard v-for="article in articles" :article="article" :key="article._path" />
  </div>
</template>