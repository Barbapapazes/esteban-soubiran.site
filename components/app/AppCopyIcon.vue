<script lang="ts" setup>
defineProps<{
  name: string
}>()
</script>

<template>
  <Icon :name="name" class="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
</template>
