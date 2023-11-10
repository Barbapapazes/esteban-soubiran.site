<script lang="ts" setup>
const { data } = await useAsyncData('content:home-latest-projects', () => queryContent('/projets/').sort({ datePublished: -1 }).only(['_path', 'title', 'datePublished', 'description', 'cover']).limit(3).find())
</script>

<template>
  <HomeSection icon="i-heroicons-folder-open-20-solid">
    <template #title>
      Mes derniers projets
    </template>

    <ol class="space-y-16">
      <li v-for="project in data" :key="project._path">
        <AppCard :to="project._path" :title="project.title" :description="project.description" :date="project.datePublished" :cover="project.cover" date-term="Publié le" />
      </li>
    </ol>

    <template #actions>
      <UButton to="/projets" color="white" trailing icon="i-heroicons-chevron-right-20-solid">
        Explorer mes projets
      </UButton>
    </template>
  </HomeSection>
</template>
