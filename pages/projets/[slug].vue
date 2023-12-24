<script lang="ts" setup>
const route = useRoute()
const { data: page, error } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

if (error.value) {
  throw createError({
    statusCode: 404,
    message: 'Page introuvable',
    fatal: true,
  })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: ISODate(page.value.datePublished),
      dateModified: ISODate(page.value.dateModified),
    },
  ),
])
</script>

<template>
  <AppPage>
    <ProseLayout :title="page.title" :date="page.datePublished" :toc="page.body.toc" :filename="page._file" :resources="page.resources">
      <ContentRenderer :value="page" />
    </ProseLayout>
  </AppPage>
</template>
