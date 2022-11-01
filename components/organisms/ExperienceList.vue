<script lang="ts" setup>
const { data: experience } = await useAsyncData('experience', () => queryContent('/experience/').find())
</script>


<template>
  <section class="w-full rounded-2xl border dark:border-zinc-700/40 p-6 flex flex-col gap-6">
    <h2 class="flex flex-row items-center gap-3 text-zinc-100 text-sm font-semibold">
      <Icon name="heroicons:briefcase-20-solid" class="h-5 w-5 text-zinc-300" />
      <slot></slot>
    </h2>
    <ul>
      <MoleculesExperienceItem :experience="item" v-for="item in experience" :key="item._path" />
    </ul>
  </section>
</template>