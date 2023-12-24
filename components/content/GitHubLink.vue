<script lang="ts" setup>
defineProps<{
  repo: string
  name?: string
}>()
</script>

<template>
  <span>
    <div class="i-simple-icons-github inline-block w-4 h-4 dark:text-gray-200" />
    <NuxtLink class="ml-1" :to="`https://github.com/${repo}`" rel="noopener">
      {{ name || (repo.startsWith('barbapapazes/') ? repo.slice(13) : repo) }}
    </NuxtLink>
  </span>
</template>
