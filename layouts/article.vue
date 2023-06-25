<script lang="ts" setup>
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
      <PageProseHeader :title="page.title" :date-published="page.datePublished" :image="page.image" />

      <!-- TODO: ajouter la toc -->
      <pre>{{ toc }}</pre>

      <PageProse>
        <slot />
      </PageProse>
    </PageSection>
  </AppSection>
</template>
