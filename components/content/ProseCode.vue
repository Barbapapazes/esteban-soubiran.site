<script lang="ts" setup>
defineProps<{
  code: string
  language?: string
  filename?: string
  meta?: string
}>()
</script>

<template>
  <div class="my-4 bg-white dark:bg-gray-900 rounded-md border border-gray-300/40 dark:border-gray-700/40">
    <div class="overflow-hidden group relative bg-gray-300/10 dark:bg-gray-700/10 px-4 py-4">
      <span v-if="filename" class="absolute top-2 right-3 text-xs font-mono text-gray-500 dark:text-gray-400">
        {{ filename }}
      </span>
      <slot />
      <ProseCodeCopy :code="code" />
    </div>
  </div>
</template>

<style scoped>
:deep(pre code .line) {
  display: block;
  min-height: 1rem;
}
</style>
