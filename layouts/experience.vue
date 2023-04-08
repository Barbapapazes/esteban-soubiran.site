<script lang="ts" setup>
const { page } = useContent()

useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: new Date(page.value.datePublished).toISOString(),
      dateModified: new Date(page.value.dateModified).toISOString()
    }
  )
])
</script>

<template>
  <AppSection>
    <PageSection>
      <PageProseHeader :title="page.title" :date-published="page.datePublished" />

      <PageProse>
        <slot />
      </PageProse>
    </PageSection>
  </AppSection>
</template>
