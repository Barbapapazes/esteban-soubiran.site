<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <details class="border-1 border-zinc-700/40 bg-zinc-700/10 px-6 py-4 rounded-xl">
    <summary class="list-none cursor-pointer flex flex-row items-center gap-2 text-zinc-100 text-sm font-semibold">
      <Icon name="heroicons:play-20-solid" class="w-3 h-3 transition-transform duration-75 ease-in" data-icon />
      <span>
        {{ title }}
      </span>
    </summary>
    <div data-content class="mt-2 text-zinc-300 text-sm">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </details>
</template>

<style scoped>
details[open] [data-icon] {
  transform: rotate(90deg);
}
</style>