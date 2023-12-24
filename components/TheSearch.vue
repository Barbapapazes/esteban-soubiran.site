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
  <HeaderItem
    as="button"
    type="button"
    title="Ouvrir la recherche"
    v-bind="$attrs"
    class="group flex justify-center items-center h-10 w-10"
    hover
    @click="openSearch = true"
  >
    <Icon
      name="i-heroicons-magnifying-glass" class="h-5 w-5 fill-sky-50 stroke-zinc-500 group-hover:stroke-zinc-600 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400 dark:fill-sky-400/10 transition ease-in"
    />
  </HeaderItem>
  <TheSearchDialog v-model:open="openSearch" />
</template>

<style scoped>
button :deep(path) {
  stroke: inherit;
  fill: inherit;
}
</style>
