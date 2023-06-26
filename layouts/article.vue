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
</script>

<template>
  <AppSection>
    <PageSection>
      <PageProseHeader :title="page.title" :date-published="page.datePublished" :cover="page.cover" />

      <PageToc v-if="toc" :toc="toc" />

      <PageProse>
        <slot />
      </PageProse>
    </PageSection>
  </AppSection>
</template>
