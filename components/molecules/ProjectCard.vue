<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

const props = defineProps<{ project: ParsedContent }>()
</script>

<template>
  <article class="group relative flex flex-col">
    <h3 class="text-base text-zinc-100 font-semibold tracking-tight">
      <div
        class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl duration-200 ease-in">
      </div>
      <NuxtLink :to=$props.project._path>
        <span class="absolute -inset-y-6 -inset-x-4 sm:-inset-x-6 z-20 sm:rounded-2xl"></span>
        <span class="relative z-10">
          {{ $props.project.title }}
        </span>
      </NuxtLink>
    </h3>
    <AtomsCardDate withBorder :datetime="props.project.createdAt" class="order-first relative mb-3" />
    <p class="relative mt-2 text-sm text-zinc-400">
      {{ $props.project.description }}
    </p>
    <div aria-hidden="true" class="relative mt-4 inline-flex items-center gap-1 text-sky-500">
      <span class="text-sm font-semibold">Lire plus</span>
      <Icon class="w-4 h-4" name="heroicons:chevron-right-20-solid" />
    </div>
  </article>
</template>