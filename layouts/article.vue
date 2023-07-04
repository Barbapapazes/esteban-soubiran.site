<script lang="ts" setup>
import PageToc from '~/components/page/PageToc.vue'

const { page, toc } = useContent()
const { ISODate } = useDate()

useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: ISODate(new Date(page.value.datePublished)),
      dateModified: ISODate(new Date(page.value.dateModified))
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
      content: ISODate(new Date(page.value.datePublished))
    },
    {
      name: 'modified_date',
      property: 'og:article:modified_date',
      content: ISODate(new Date(page.value.dateModified))
    }
  ]
})
</script>

<template>
  <AppSection>
    <PageSection>
      <PageProseHeader :title="page.title" :date-published="page.datePublished" :cover="page.cover" />

      <PageToc v-if="toc" :toc="toc" />

      <PageProse>
        <slot />
      </PageProse>
      <EditOnLink class="mt-4" />
      <PrevNext class="mt-8" />
    </PageSection>
  </AppSection>
</template>
