<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

defineProps<{
  experience: ParsedContent;
}>();
</script>

<template>
  <article class="group relative flex flex-col items-start">

    <AtomsExperienceImage :image="experience.company" class="z-20" />
    <h2 class=" mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
      <div
        class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition duration-200 ease-in group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl">
      </div>
      <NuxtLink :to="experience._path">
        <span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
        <span class="relative z-10">{{
            experience.title
        }}</span>
      </NuxtLink>
    </h2>
    <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {{ experience.description }}
    </p>
    <p
      class="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-sky-500 dark:text-zinc-200">
      <Icon name="heroicons:link-20-solid" class="h-4 w-4"></Icon>
      <span class="ml-2">
        {{ experience.company.url }}
      </span>
    </p>
  </article>
</template>

