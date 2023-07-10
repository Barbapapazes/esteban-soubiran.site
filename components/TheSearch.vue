<script lang="ts" setup>
const openSearch = ref(false)

useEventListener('keydown', (event) => {
  if (event.key === 'k' && event.ctrlKey) {
    event.preventDefault()
    openSearch.value = true
  }
})
</script>

<template>
  <button
    v-bind="$attrs"
    title="Ouvrir la recherche"
    type="button"
    class="group rounded-full bg-blur h-10 w-10 flex justify-center items-center shadow-base border-base hover:ring-zinc-900/10 hover:dark:ring-white/20 transition-base"
    @click="openSearch = true"
  >
    <Icon
      name="heroicons:magnifying-glass"
      class="h-5 w-5 fill-sky-50 stroke-zinc-500 group-hover:stroke-zinc-600 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400 dark:fill-sky-400/10 transition-base"
    />
  </button>
  <TheSearchDialog v-model:open="openSearch" />
</template>

<style scoped>
button :deep(path) {
  stroke: inherit;
  fill: inherit;
}
</style>
