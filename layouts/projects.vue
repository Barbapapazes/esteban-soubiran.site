<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { page } = useContent()

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])

const { data: projects } = await useAsyncData('content:projects', () => queryContent('/projets/').only(['_path', 'title', 'description', 'datePublished']).find() as Promise<ParsedContent[]>)
</script>

<template>
  <AppSection>
    <PageSection class="gap-20">
      <PageHeader :title="page.hero.title ?? page.title" :description="page.hero.description" />

      <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 items-start">
        <AppCard v-for="project in projects" :key="project._path" :to="project._path" :title="project.title" :description="project.description" :date="project.datePublished" />
      </section>
    </PageSection>
  </AppSection>
</template>
