<script lang="ts" setup>
const props = defineProps<{
  max?: number
}>()

const { data: projects } = await useProjects(props.max)
</script>

<template>
  <section>
    <h2 class="sr-only">
      <slot />
    </h2>
    <div class="flex max-w-3xl flex-col space-y-16">
      <ProjectsCard v-for="project in projects" :key="project._path" :project="project" />
    </div>
  </section>
</template>
