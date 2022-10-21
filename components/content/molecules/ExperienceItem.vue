<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

defineProps<{
  experience: ParsedContent
}>()
</script>

<template>
  <li>
    <NuxtLink :to="$props.experience._path" class="w-full flex flex-row items-center gap-4">
      <div
        class="h-10 w-10 shadow-md shadow-zinc-800/5 border border-zinc-700/50 dark:bg-zinc-800 rounded-full flex flex-row justify-center items-center">
        <img :src="$props.experience.company.src" :alt="$props.experience.company.alt" class="rounded-full h-7 w-7"
          loading="lazy">
      </div>
      <div class="w-full">
        <div class="text-zinc-100 text-sm font-semibold">{{ $props.experience.title }}</div>
        <div class="flex flex-row justify-between text-xs">
          <span class="text-zinc-400">
            {{ $props.experience.position }}
          </span>
          <span class="text-zinc-500">
            {{ $props.experience.from }} - {{ $props.experience.to }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>