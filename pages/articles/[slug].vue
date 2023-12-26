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

useServerHead({
  meta: [
    {
      name: 'author',
      content: 'Estéban Soubiran',
    },
    {
      property: 'og:article:author',
      content: 'Estéban Soubiran',
    },
    {
      name: 'publish_date',
      property: 'og:article:publish_date',
      content: ISODate(page.value.datePublished),
    },
    {
      name: 'modified_date',
      property: 'og:article:modified_date',
      content: ISODate(page.value.dateModified),
    },
  ],
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
const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('/articles')
  .where({ _extension: 'md', navigation: { $ne: false } })
  .without(['body', 'excerpt'])
  .findSurround(route.path))
</script>

<template>
  <AppPage>
    <ProseLayout :title="page.title" :date="page.datePublished" :toc="page.body.toc" :filename="page._file" :resources="page.resources">
      <ContentRenderer :value="page" />
    </ProseLayout>
    <PrevNext :prev="surround[0]" :next="surround[1]" />
  </AppPage>
</template>
