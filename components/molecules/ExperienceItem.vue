<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

defineProps<{
  experience: ParsedContent
}>()
</script>

<template>
  <li>
    <NuxtLink :to="$props.experience._path" class="w-full flex flex-row items-center gap-4">
      <AtomsExperienceImage small :image="experience.company" class="shrink-0
      " />
      <dl class="flex flex-auto flex-wrap gap-x-2">
        <dt class="sr-only">
          Entreprise
        </dt>
        <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {{ $props.experience.company.name }}
        </dd>
        <dt class="sr-only">
          Poste
        </dt>
        <dd class="text-xs text-zinc-500 dark:text-zinc-400">
          {{ $props.experience.title }}
        </dd>
        <dt class="sr-only">
          Date
        </dt>
        <dd class="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
          <time :datetime="$props.experience.from">
            {{ $props.experience.from }}
          </time>
          -
          <time :datetime="$props.experience.to">
            {{ $props.experience.to }}
          </time>
        </dd>
      </dl>
    </NuxtLink>
  </li>
</template>