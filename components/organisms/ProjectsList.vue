<script lang="ts" setup>
import { AsyncData } from "#app"
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

const props = defineProps<{
  max?: number
}>();

let query: AsyncData<ParsedContent[], true | Error>
if (props.max) {
  query = useAsyncData(`projects-${props.max}`, () => queryContent('/projects/').sort({ createdAt: -1 }).limit(props.max).find())
} else {
  query = useAsyncData('projects', () => queryContent('/projects/').sort({ createdAt: -1 }).find())
}

const { data: projects } = await query
</script>

<template>
  <section>
    <h2 class="sr-only">
      <slot></slot>
    </h2>
    <div class="flex max-w-3xl flex-col space-y-16">
      <MoleculesProjectCard v-for="project in projects" :project="project" :key="project._path" />
    </div>
  </section>
</template>