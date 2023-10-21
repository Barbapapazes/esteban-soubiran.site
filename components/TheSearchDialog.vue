<script lang="ts" setup>
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import type { SearchResult } from 'minisearch'

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  'update:open': [state: boolean]
}>()

function close() {
  emit('update:open', false)
}

const selected = ref<SearchResult | null>(null)
const search = ref('')
const searchDebounced = refDebounced(search, 200)

const navigate = function () {
  if (!selected.value)
    return

  navigateTo(selected.value.id)
  close()
}

const isEmpty = ref(false)
const result = await useSearch(searchDebounced)

const slicedResult = computed(() => {
  return result.value.slice(0, 12)
})

watch(result, () => {
  if (!result.value.length && search.value)
    isEmpty.value = true
})

watch(search, () => {
  if (!search.value)
    isEmpty.value = false
})
</script>

<template>
  <TransitionRoot appear :show="open" as="template">
    <Dialog as="div" class="relative z-50" @close="close">
      <TransitionChild
        as="template"
        enter="duration-200 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-100 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 backdrop-blur-sm bg-white/1" />
      </TransitionChild>

      <div class="fixed inset-0">
        <div class="h-full flex flex-row justify-center items-center">
          <TransitionChild
            as="template"
            enter="duration-200 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel as="div" class="h-full md:h-auto w-full max-w-3xl md:h-md flex flex-col bg-white/90 dark:bg-zinc-800/90 md:rounded-2xl md:border-base shadow-xl text-content overflow-hidden">
              <Combobox v-model="selected">
                <div class="relative flex flex-row justify-between items-center px-6 py-2 border-b border-zinc-9000/5 dark:border-white/10">
                  <label for="search">
                    <span class="sr-only">
                      Rechercher
                    </span>
                    <Icon
                      name="heroicons:magnifying-glass"
                      class="w-6 h-6"
                    />
                  </label>
                  <ComboboxInput
                    id="search"
                    type="text"
                    name="search"
                    placeholder="Rechercher..."
                    class="ml-4 py-1 w-full bg-transparent focus:outline-none placeholder:text-reduced placeholder:text-lg text-lg"
                    :value="search"
                    @change="search = $event.target.value"
                    @keydown.enter="navigate"
                  />
                  <button class=" ml-4 p-1" @click="close">
                    <Icon
                      name="heroicons:x-mark-solid"
                      class="w-6 h-6 text-reduced"
                    />
                  </button>
                </div>
                <ComboboxOptions static class="flex flex-col items-start divide-y divide-zinc-900/2 dark:divide-white/5 overflow-y-scroll">
                  <ComboboxOption
                    v-for="item in slicedResult"
                    :key="item.id"
                    v-slot="{ active }"
                    :value="item"
                    as="template"
                    @click="close"
                  >
                    <NuxtLink :to="item.id" class="px-6 py-3 w-full flex" :class="{ 'bg-sky-100/60 dark:bg-sky-900/20': active }">
                      <Icon name="heroicons:hashtag" :class="{ 'text-primary': active, 'text-reduced': !active }" class="my-1 shrink-0" />
                      <div class="ml-2 flex items-center gap-x-2 flex-wrap">
                        <template v-for="title in item.titles" :key="title">
                          <span>
                            {{ title }}
                          </span>
                          <Icon name="heroicons:chevron-right" class="text-reduced" />
                        </template>
                        <span class="font-semibold" :class="{ 'text-primary': active }">
                          {{ item.title }}
                        </span>
                      </div>
                    </NuxtLink>
                  </ComboboxOption>
                </ComboboxOptions>
                <div v-if="isEmpty" class="h-full flex flex-col items-center justify-center">
                  <p class="text-content">
                    Aucun résultat pour "<strong>{{ search }}</strong>"
                  </p>
                  <p class="mt-6 text-sm text-content">
                    Essayez de rechercher un article ou une page
                  </p>
                  <ul class="mt-2 text-content">
                    <li class="flex flex-row items-center gap-1">
                      <Icon
                        name="heroicons:chevron-double-right"
                        class="w-3 h-3"
                      />
                      <NuxtLink to="/articles" class="text-primary hover:text-sky-600 dark:hover:text-sky-300" @click="close">
                        Voir tous mes articles
                      </NuxtLink>
                    </li>
                    <li class="flex flex-row items-center gap-1">
                      <Icon
                        name="heroicons:chevron-double-right"
                        class="w-3 h-3"
                      />
                      <NuxtLink to="/talks" class="text-primary hover:text-sky-600 dark:hover:text-sky-300" @click="close">
                        Voir tous mes talks
                      </NuxtLink>
                    </li>
                    <li class="flex flex-row items-center gap-1">
                      <Icon
                        name="heroicons:chevron-double-right"
                        class="w-3 h-3"
                      />
                      <NuxtLink to="/a-propos" class="text-primary hover:text-sky-600 dark:hover:text-sky-300" @click="close">
                        À propos
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </Combobox>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
