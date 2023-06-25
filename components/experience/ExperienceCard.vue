<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  experience: ParsedContent;
}>()
</script>

<template>
  <article class="group relative flex flex-col items-start gap-6">
    <ExperienceImage :image="experience.company" class="z-20" />

    <div class="flex flex-col gap-1">
      <h2 class="text-base font-semibold tracking-tight text-content">
        <div
          class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition duration-200 ease-in group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
        />
        <NuxtLink :to="experience._path">
          <span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span class="relative z-10">{{
            experience.title
          }}</span>
        </NuxtLink>
      </h2>
      <p class="z-10 text-sm font-normal text-content">
        {{ experience.position }}
      </p>
      <p class="z-10 text-sm font-normal text-reduced">
        {{ experience.from }}
        <span v-if="experience.to"> -
          {{ experience.to }}
        </span>
      </p>
    </div>

    <p class="relative z-10 text-sm text-reduced grow">
      {{ experience.description }}
    </p>

    <NuxtLink
      :to="experience.company.url"
      rel="noopener"
      class="relative z-30 flex items-center text-sm font-medium text-content hover:text-primary transition"
    >
      <Icon name="heroicons:link-20-solid" class="h-4 w-4" />
      <span class="ml-2">
        {{ experience.company.url.replace('https://', '') }}
      </span>
    </NuxtLink>
  </article>
</template>
