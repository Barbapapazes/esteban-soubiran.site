<script lang="ts" setup>
defineProps<{
  icon: string
}>()
</script>

<template>
  <section class="group/section space-y-12">
    <h2 class="flex gap-3 text-sm font-semibold">
      <span class="block h-5 w-5 text-zinc-500 dark:text-zinc-400 group-hover/section:text-zinc-800 dark:group-hover/section:text-zinc-200 transition ease-in" :class="icon" />
      <span>
        <slot name="title" />
      </span>
    </h2>

    <slot />

    <div class="flex flex-row justify-center items-center">
      <slot name="actions" />
    </div>
  </section>
</template>
