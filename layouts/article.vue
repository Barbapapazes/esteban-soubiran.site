<script lang="ts" setup>
const { page, toc } = useContent()

const publishedAt = page.value.datePublished ? ISODate(page.value.datePublished) : ''
const modifiedAt = page.value.dateModified ? ISODate(page.value.dateModified) : ''

useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: publishedAt,
      dateModified: modifiedAt,
    },
  ),
])

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
      content: publishedAt,
    },
    {
      name: 'modified_date',
      property: 'og:article:modified_date',
      content: modifiedAt,
    },
  ],
})
</script>

<template>
  <AppSection>
    <ProseLayout :title="page.title" :date="page.datePublished" :toc="toc" :filename="page._file" :resources="page.resources">
      <slot />
    </ProseLayout>
    <PrevNext class="mt-12" />
  </AppSection>
</template>
