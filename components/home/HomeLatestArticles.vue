<script lang="ts" setup>
const { data } = await useAsyncData('content:home-latest-articles', () => queryContent('/articles/').sort({ datePublished: -1 }).only(['_path', 'title', 'description', 'datePublished']).limit(4).find())
</script>

<template>
  <HomeSection icon="i-heroicons-pencil-20-solid">
    <template #title>
      Mes derniers articles
    </template>

    <ol class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <li v-for="article in data" :key="article._path">
        <AppCard :to="article._path" :title="article.title" :description="article.description" :date="article.datePublished" />
      </li>
    </ol>

    <template #actions>
      <UButton to="/articles" color="white" trailing icon="i-heroicons-chevron-right-20-solid">
        Tous mes articles
      </UButton>
    </template>
  </HomeSection>
</template>
