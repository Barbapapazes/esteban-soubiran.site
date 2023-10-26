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
            class="w-40"
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
        <div v-if="results.length" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
          <UCard v-for="article in results" :key="article._path" as="article" :ui="{ base: 'group relative overflow-visible flex flex-col', background: 'bg-white dark:bg-zinc-900', divide: 'divide-none', ring: 'ring-0', body: { base: 'grow', padding: 'py-0 px-0 sm:p-0 !pt-2' }, header: { padding: '' }, footer: { padding: 'px-0 py-0 sm:px-0 !pt-4' } }">
            <template #header>
              <div
                class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl duration-200 ease-in"
              />
              <h2 class="font-semibold">
                <NuxtLink :to="article._path">
                  <span class="absolute -inset-y-6 -inset-x-4 sm:-inset-x-6 z-20 sm:rounded-2xl" />
                  <span class="relative">
                    {{ article.title }}
                  </span>
                </NuxtLink>
              </h2>
            </template>

            <p class="relative text-zinc-500 dark:text-zinc-400">
              {{ article.description }}
            </p>

            <template #footer>
              <dl class="relative text-zinc-500 dark:text-zinc-400">
                <dt class="sr-only">
                  Date de publication
                </dt>
                <dd>
                  <time :datetime="ISODate(article.datePublished)">
                    {{ formatDate(article.datePublished) }}
                  </time>
                </dd>
              </dl>
            </template>
          </UCard>
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
