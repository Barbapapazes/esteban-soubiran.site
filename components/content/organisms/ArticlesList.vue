<script lang="ts" setup>
const { data: articles } = await useAsyncData('articles', () => queryContent('/articles/').find())
</script>

<template>
  <section>
    <h2 class="sr-only">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </h2>
    <div class="flex flex-col gap-16">
      <ArticleCard v-for="article in articles" :article="article" :key="article._path" />
    </div>
  </section>
</template>