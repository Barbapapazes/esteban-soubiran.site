<script lang="ts" setup>
const { page } = useContent()
const { github } = usePortfolio()

const link = computed(() => {
  return `https://github.com/${github.owner}/edit/${github.branch}/content/${page.value._file}`
})
</script>

<template>
  <div class="w-full max-w-prose mx-auto">
    <NuxtLink rel="noopener" target="_blank" :to="link" class="inline-flex flex-row items-center hover:text-primary transition-base">
      <Icon name="heroicons:pencil-square" class="h-5 w-5 mr-2" />
      <span> Éditer la page </span>
    </NuxtLink>
  </div>
</template>
