<script lang="ts" setup>
const { data: projects } = await useAsyncData('projects', () => queryContent('/projects/').find())
</script>

<template>
  <div class="flex max-w-3xl flex-col space-y-16">
    <MoleculesProjectCard v-for="project in projects" :project="project" :key="project._path" />
  </div>
</template>