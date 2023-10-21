<script lang="ts" setup>
const { page, toc } = useContent()

const { ISODate } = useDate()

useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: ISODate(new Date(page.value.datePublished)),
      dateModified: ISODate(new Date(page.value.dateModified)),
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
