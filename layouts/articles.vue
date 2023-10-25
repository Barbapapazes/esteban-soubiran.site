<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const { page } = useContent()

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])

const { data: articles } = await useAsyncData('content:articles-search', () => queryContent('/articles/').only(['_path', 'title', 'description', 'datePublished']).sort({ datePublished: -1 }).find() as Promise<ParsedContent[]>)

if (!articles.value) {
  throw createError({
    statusCode: 404,
    message: 'Page not found',
  })
}

// en amont, filtrer en fonction du select (mais à voir plus tard)

const search = ref('')
const searchDebounced = refDebounced(search, 150)

const { results: searchResults } = useMiniSearch(searchDebounced, articles as Ref<ParsedContent[]>, {
  idField: '_path',
  fields: ['title', 'description'],
  storeFields: ['_path', 'title', 'description', 'datePublished'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
})

const results = computed(() => {
  if (searchDebounced.value)
    return searchResults.value

  return articles.value
}) as ComputedRef<ParsedContent[]>
</script>

<template>
  <AppSection>
    <PageSection class="gap-20">
      <PageHeader :title="page.title">
        <slot />
      </PageHeader>
      <div class="flex">
        <UInput
          v-model="search"
          icon="i-heroicons-magnifying-glass-20-solid"
          size="sm"
          color="white"
          :trailing="false"
          name="input"
          placeholder="Rechercher un article"
        />
      </div>
      <section>
        <h2 class="sr-only">
          {{ page.title }}
        </h2>
        <div v-if="results.length" class="flex max-w-3xl flex-col space-y-16">
          <ArticlesCard v-for="article in results" :key="article._path" :article="article" />
        </div>
        <div v-else>
          <p class="text-center">
            Aucun article ne correspond à votre recherche.
          </p>
        </div>
      </section>
    </PageSection>
  </AppSection>
</template>
