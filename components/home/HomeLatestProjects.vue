<script lang="ts" setup>
const { data } = await useAsyncData('content:home-latest-projects', () => queryContent('/projets/').sort({ datePublished: -1 }).only(['_path', 'title', 'datePublished', 'description', 'cover']).limit(3).find())
</script>

<template>
  <HomeSection>
    <HomeSectionTitle icon="i-heroicons-folder-open-20-solid">
      Mes derniers projets
    </HomeSectionTitle>
    <ul class="space-y-16">
      <li v-for="project in data" :key="project._path">
        <Card :to="project._path" :title="project.title" :description="project.description" :date="project.datePublished" :cover="project.cover" date-term="Publié le" />
      </li>
    </ul>
    <HomeSectionAction to="/projets">
      Explorer mes projets
    </HomeSectionAction>
  </HomeSection>
</template>
