<script lang="ts" setup>
const { page, toc } = useContent()

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
  <AppSection>
    <ProseLayout :title="page.title" :date="page.datePublished" :toc="toc" :filename="page._file" :resources="page.resources">
      <slot />
    </ProseLayout>
  </AppSection>
</template>
