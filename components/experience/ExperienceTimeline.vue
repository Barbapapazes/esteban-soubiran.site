<script lang="ts" setup>
const { data: experience } = await useExperience()
</script>

<template>
  <section class="w-full rounded-2xl border dark:border-zinc-700/40 p-6 flex flex-col gap-6">
    <h2 class="flex gap-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <Icon name="heroicons:briefcase-20-solid" class="h-5 w-5 text-zinc-600 dark:text-zinc-300" />
      <slot />
    </h2>
    <ul class="flex flex-col gap-4">
      <ExperienceTimelineItem v-for="item in experience" :key="item._path" :experience="item" />
    </ul>
  </section>
</template>
