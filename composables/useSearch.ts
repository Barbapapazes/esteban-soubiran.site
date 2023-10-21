import MiniSearch, { type Options as MiniSearchOptions, type SearchResult as MiniSearchSearchResult } from 'minisearch'

export async function useSearch(search: MaybeRefOrGetter<string>): Promise<ComputedRef<MiniSearchSearchResult[]>> {
  const { data: searchData } = await useFetch<string>('/api/search', { lazy: true, server: false })

  const data = computed(() => {
    return searchData.value ?? JSON.stringify({ serializationVersion: 2, documentIds: {}, documentCount: 0, index: [], nextId: 0, fieldIds: {}, fieldLength: {}, averageFieldLength: [], storedFields: {}, dirtCount: 0 })
  })

  const { results } = useIndexedMiniSearch(search, data, {
    fields: ['title', 'titles'],
    storeFields: ['title', 'titles'],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: {
        title: 4,
        titles: 1,
      },
    },
  })

  return results
}

function useIndexedMiniSearch(search: MaybeRefOrGetter<string>, indexedData: MaybeRefOrGetter<string>, options: MiniSearchOptions) {
  const createIndexedMiniSearch = () => {
    return MiniSearch.loadJSON(toValue(indexedData), toValue(options))
  }

  const indexedMiniSearch = ref(createIndexedMiniSearch())

  watch(
    () => toValue(options),
    () => { indexedMiniSearch.value = createIndexedMiniSearch() },
    { deep: true },
  )

  watch(
    () => toValue(indexedData),
    () => { indexedMiniSearch.value = createIndexedMiniSearch() },
    { deep: true },
  )

  const results = computed(() => {
    return indexedMiniSearch.value.search(toValue(search))
  })

  return {
    results,
    indexedMiniSearch,
  }
}
