<script lang="ts" setup>
const { data } = await useAsyncData('content:home-latest-articles', () => queryContent('/articles/').sort({ datePublished: -1 }).only(['_path', 'title', 'description', 'datePublished']).limit(4).find())
</script>

<template>
  <HomeSection>
    <HomeSectionTitle icon="i-heroicons-pencil-20-solid">
      Mes derniers articles
    </HomeSectionTitle>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <li v-for="article in data" :key="article._path">
        <Card :to="article._path" :title="article.title" :description="article.description" :date="article.datePublished" date-term="Publié le" />
      </li>
    </ul>
    <HomeSectionAction to="/articles">
      Tous mes articles
    </HomeSectionAction>
  </HomeSection>
</template>
