<script lang="ts" setup>
defineProps<{
  code: string
  language?: string
  filename?: string
  meta?: string
}>()
</script>

<template>
  <div class="my-4 bg-white dark:bg-zinc-900 rounded-xl border-1 border-zinc-300/40 dark:border-zinc-700/40 overflow-hidden">
    <div class="group relative bg-zinc-300/10 dark:bg-zinc-700/10 px-4 py-4">
      <span v-if="filename" class="absolute top-2 right-3 text-xs font-mono text-reduced">
        {{ filename }}
      </span>
      <slot />
      <AppCopy :code="code" />
    </div>
  </div>
</template>

<style scoped>
:deep(pre code .line) {
  display: block;
  min-height: 1rem;
}
</style>
