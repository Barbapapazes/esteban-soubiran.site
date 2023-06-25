<script lang="ts" setup>
const { page } = useContent()

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

      <TalksInfo class="max-w-prose w-full mx-auto mt-10" />

      <PageProse class="mt-10">
        <slot />
      </PageProse>
    </PageSection>
  </AppSection>
</template>
