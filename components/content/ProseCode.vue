<script lang="ts" setup>
defineProps<{
  code: string,
  language?: string
  filename?: string,
  meta?: string
}>()

const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <div class="group relative border-1 border-zinc-300/40 dark:border-zinc-700/40 bg-zinc-300/10 dark:bg-zinc-700/10 px-4 py-4 rounded-xl">
    <span v-if="filename" class="absolute top-2 right-3 text-xs font-mono">
      {{ filename }}
    </span>
    <slot />
    <button v-if="isSupported" class="opacity-0 group-hover:opacity-100 absolute right-3 bottom-2 p-1 transition" @click="copy(code)">
      <Icon v-if="copied" name="heroicons:check-solid" class="w-4 h-4" />
      <Icon v-else name="heroicons:clipboard-document" class="w-4 h-4" />
    </button>
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>
