<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])

const { data: projects } = useAsyncData('projects', () => queryContent('/projets/').only(['_path', 'title', 'description', 'datePublished']).sort({ datePublished: -1 }).find())
</script>

<template>
  <AppPage :title="page.title" :description="page.hero.description ?? page.description">
    <AppGrid>
      <AppCard v-for="project in projects" :key="project._path" :to="project._path" :title="project.title" :description="project.description" :date="project.datePublished" />
    </AppGrid>
  </AppPage>
</template>
