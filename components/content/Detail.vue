<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <!-- rename to Disclosure -->
  <details class="border-1 border-gray-300/40 dark:border-gray-700/40 bg-gray-300/10 dark:bg-gray-700/10 my-8 px-4 py-4 rounded-xl">
    <summary class="list-none cursor-pointer flex flex-row items-center gap-2 text-gray-500 dark:text-gray-300 text-sm font-semibold">
      <Icon name="heroicons:play-20-solid" class="w-3 h-3 transition-transform duration-75 ease-in" data-icon />
      <span>
        {{ title }}
        <ContentSlot :use="$slots.title" unwrap="p" />
      </span>
    </summary>
    <div data-content class="mt-2 text-gray-500 dark:text-gray-300 text-sm">
      <ContentSlot :use="$slots.default" />
    </div>
  </details>
</template>

<style scoped>
details[open] [data-icon] {
  transform: rotate(90deg);
}

[data-content] :deep(p:last-child) {
  margin-bottom: 0;
}
</style>
