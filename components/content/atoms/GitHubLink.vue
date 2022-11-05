<script lang="ts" setup>
defineProps<{
  repo: string
  name?: string
}>()
</script>


<template>
  <span>
    <Icon name="carbon:logo-github" class="inline-block w-5 h-5 dark:text-zinc-200" />
    <NuxtLink class="ml-1" :to="`https://github.com/${repo}`">
      {{ name || (repo.startsWith('barbapapazes/') ? repo.slice(13) : repo) }}
    </NuxtLink>
  </span>
</template>