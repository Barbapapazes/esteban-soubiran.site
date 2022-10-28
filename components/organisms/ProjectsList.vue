<script lang="ts" setup>
const { data: projects } = await useAsyncData('projects', () => queryContent('/projects/').find())
</script>

<template>
  <div class="flex flex-col gap-16">
    <MoleculesProjectCard v-for="project in projects" :project="project" :key="project._path" />
  </div>
</template>