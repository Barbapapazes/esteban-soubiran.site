<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])

const { page } = useContent()

const { data: talks } = await useAsyncData('content:talks', () => queryContent('/talks/').only(['_path', 'title', 'description', 'datePublished']).find() as Promise<ParsedContent[]>)
</script>

<template>
  <AppSection>
    <PageSection class="gap-20">
      <PageHeader :title="page.title">
        <slot />
      </PageHeader>

      <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 items-start">
        <ArticlesCard v-for="talk in talks" :key="talk._path" :to="talk._path" :title="talk.title" :description="talk.description" :date="talk.datePublished" />
      </section>
    </PageSection>
  </AppSection>
</template>
