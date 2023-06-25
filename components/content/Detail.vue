<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <!-- rename to Disclosure -->
  <details class="border-1 border-zinc-300/40 dark:border-zinc-700/40 bg-zinc-300/10 dark:bg-zinc-700/10 px-4 py-4 rounded-xl">
    <summary class="list-none cursor-pointer flex flex-row items-center gap-2 text-zinc-500 dark:text-zinc-300 text-sm font-semibold">
      <Icon name="heroicons:play-20-solid" class="w-3 h-3 transition-transform duration-75 ease-in" data-icon />
      <span>
        {{ title }}
        <ContentSlot :use="$slots.title" unwrap="p" />
      </span>
    </summary>
    <div data-content class="mt-2 text-zinc-500 dark:text-zinc-300 text-sm">
      <ContentSlot :use="$slots.default" />
    </div>
  </details>
</template>

<style scoped>
details[open] [data-icon] {
  transform: rotate(90deg);
}

[data-content] :deep p:last-child {
  margin-bottom: 0;
}
</style>
