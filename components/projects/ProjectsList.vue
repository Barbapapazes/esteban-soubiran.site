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
    <div class="grid max-w-3xl gap-y-16">
      <ProjectsCard v-for="project in projects" :key="project._path" :project="project" />
    </div>
  </section>
</template>
