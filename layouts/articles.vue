<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])

const { page } = useContent()

const { data: articles } = await useAsyncData('content:articles-search', () => queryContent('/articles/').only(['_path', 'title', 'description', 'datePublished']).find() as Promise<ParsedContent[]>)

if (!articles.value) {
  throw createError({
    statusCode: 404,
    message: 'Page not found',
  })
}

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

const order = ref<1 | -1>(-1)
const toggleOrder = function () {
  order.value = order.value === 1 ? -1 : 1
}

const orderByOptions = [
  {
    id: 'datePublished',
    label: 'Publication',
  },
  {
    id: 'title',
    label: 'Titre',
  },
]
const orderBy = ref<string>('datePublished')
const currentOrderBy = computed(() => orderByOptions.find(option => option.id === orderBy.value))

const results = computed(() => {
  const currentArticles = searchDebounced.value ? [...searchResults.value] : [...articles.value!]

  if (!orderBy.value)
    return currentArticles

  return currentArticles.sort((a, b) => {
    if (a[orderBy.value] < b[orderBy.value])
      return -1 * order.value

    if (a[orderBy.value] > b[orderBy.value])
      return 1 * order.value

    return 0
  })
})
</script>

<template>
  <AppSection>
    <PageSection class="gap-20">
      <PageHeader :title="page.title">
        <slot />
      </PageHeader>

      <div class="flex justify-between">
        <UInput
          v-model="search"
          icon="i-heroicons-magnifying-glass-20-solid"
          size="sm"
          variant="outline"
          color="white"
          :trailing="false"
          name="input"
          placeholder="Rechercher un article"
        />
        <UButtonGroup size="sm" orientation="horizontal">
          <UButton
            :icon="order === 1 ? 'i-heroicons-bars-arrow-up-20-solid' : 'i-heroicons-bars-arrow-down-20-solid'"
            color="white"
            :title="order === 1 ? 'Ordre croissant' : 'Ordre décroissant'"
            @click="toggleOrder()"
          />
          <USelectMenu
            v-model="orderBy"
            class="w-32"
            :options="orderByOptions"
            color="white"
            placeholder="Trier par"
            select-class="cursor-pointer"
            value-attribute="id"
            option-attribute="label"
          >
            <template #label>
              {{ currentOrderBy?.label }}
            </template>
          </USelectMenu>
        </UButtonGroup>
      </div>

      <section>
        <div v-if="results.length" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 items-start">
          <ArticlesCard v-for="article in results" :key="article._path" :to="article._path" :title="article.title" :description="article.description" :date="article.datePublished" />
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
