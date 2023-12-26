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

const { data: experience } = await useAsyncData('experience', () => queryContent('/experience/').only(['_path', 'title', 'description', 'position', 'from', 'to', 'company']).sort({ from: -1 }).find())
</script>

<template>
  <AppPage :title="page.title" :description="page.hero.description ?? page.description">
    <AppGrid>
      <ExperienceCard v-for="item in experience" :key="item._path" :experience="item" />
    </AppGrid>
  </AppPage>
</template>
