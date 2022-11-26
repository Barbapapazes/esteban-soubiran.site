<script lang="ts" setup>
const { data: experience } = await useAsyncData('experiences', () => queryContent('/experience/').sort({ to: -1 }).find())
</script>

<template>
  <section>
    <h2 class="sr-only">
      <slot></slot>
    </h2>
    <ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      <MoleculesExperienceCard v-for="item in experience" :experience="item" :key="item._path" />
    </ul>
  </section>
</template>