<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

defineProps<{
  experience: ParsedContent
}>()
</script>

<template>
  <li>
    <NuxtLink :to="$props.experience._path" class="w-full flex flex-row items-center gap-4">
      <AtomsExperienceImage :image="experience.company" />
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