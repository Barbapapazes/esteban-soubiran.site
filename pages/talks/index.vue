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

const { data: talks } = await useAsyncData('talks', () => queryContent('/talks/').only(['_path', 'title', 'description', 'datePublished']).find())
</script>

<template>
  <AppPage :title="page.title" :description="page.hero.description ?? page.description">
    <AppGrid>
      <AppCard v-for="talk in talks" :key="talk._path" :to="talk._path" :title="talk.title" :description="talk.description" :date="talk.datePublished" />
    </AppGrid>
  </AppPage>
</template>
