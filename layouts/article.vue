<script lang="ts" setup>
import PageToc from '~/components/page/PageToc.vue'

const { page, toc } = useContent()
const { ISODate } = useDate()

const publishedAt = page.value.datePublished ? ISODate(new Date(page.value.datePublished)) : ''
const modifiedAt = page.value.dateModified ? ISODate(new Date(page.value.dateModified)) : ''

useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: publishedAt,
      dateModified: modifiedAt
    }
  )
])

useServerHead({
  meta: [
    {
      name: 'author',
      content: 'Estéban Soubiran'
    },
    {
      property: 'og:article:author',
      content: 'Estéban Soubiran'
    },
    {
      name: 'publish_date',
      property: 'og:article:publish_date',
      content: publishedAt
    },
    {
      name: 'modified_date',
      property: 'og:article:modified_date',
      content: modifiedAt
    }
  ]
})
</script>

<template>
  <AppSection>
    <PageSection>
      <PageProseHeader :title="page.title" :date-published="page.datePublished" :cover="page.cover" />

      <PageToc v-if="toc.links.length" :toc="toc" />

      <PageProse>
        <slot />
      </PageProse>
      <EditOnLink class="mt-4" />
      <PrevNext class="mt-8" />
    </PageSection>
  </AppSection>
</template>
