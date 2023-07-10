import MiniSearch, { type Options as MiniSearchOptions, SearchResult } from 'minisearch'

export const useSearch = async (search: MaybeRefOrGetter<string>): Promise<ComputedRef<SearchResult[]>> => {
  const { data } = await useFetch<string>('/api/search')

  if (!data.value) { return computed(() => []) }

  const { results } = useIndexedMiniSearch(search, data as Ref<string>, {
    fields: ['title', 'titles'],
    storeFields: ['title', 'titles'],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: {
        title: 4,
        content: 2,
        titles: 1
      }
    }
  })

  return results
}

const useIndexedMiniSearch = (search: MaybeRefOrGetter<string>, indexedData: MaybeRefOrGetter<string>, options: MiniSearchOptions) => {
  const createIndexedMiniSearch = () => {
    return MiniSearch.loadJSON(toValue(indexedData), toValue(options))
  }

  const indexedMiniSearch = ref(createIndexedMiniSearch())

  watch(
    () => toValue(options),
    () => { indexedMiniSearch.value = createIndexedMiniSearch() },
    { deep: true }
  )

  watch(
    () => toValue(indexedData),
    () => { indexedMiniSearch.value = createIndexedMiniSearch() },
    { deep: true }
  )

  const results = computed(() => {
    return indexedMiniSearch.value.search(toValue(search))
  })

  return {
    results,
    indexedMiniSearch
  }
}
