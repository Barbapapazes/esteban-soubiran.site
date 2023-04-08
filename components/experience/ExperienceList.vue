<script lang="ts" setup>
const { data: experience } = await useExperience()
</script>

<template>
  <section>
    <h2 class="sr-only">
      <slot />
    </h2>
    <ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
      <ExperienceCard v-for="item in experience" :key="item._path" :experience="item" />
    </ul>
  </section>
</template>
