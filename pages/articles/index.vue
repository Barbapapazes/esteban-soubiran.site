<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

useSchemaOrg([
  defineWebPage({
    '@type': 'CollectionPage',
  }),
])

const { data: articles } = await useAsyncData('articles', () => queryContent('/articles/').only(['_path', 'title', 'description', 'datePublished']).find())

const search = ref('')
const searchDebounced = refDebounced(search, 150)

const { results: searchResults } = useMiniSearch(searchDebounced, articles, {
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
  <AppPage :title="page.title" :description="page.hero.description ?? page.description">
    <div class="flex flex-col gap-8">
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
      <AppGrid v-if="results.length">
        <AppCard v-for="article in results" :key="article._path" :to="article._path" :title="article.title" :description="article.description" :date="article.datePublished" />
      </AppGrid>
      <p v-else class="text-center text-zinc-500 dark:text-zinc-400">
        Aucun article ne correspond à votre recherche.
      </p>
    </div>
  </AppPage>
</template>
