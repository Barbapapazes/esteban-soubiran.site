<script lang="ts" setup>
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

defineProps<{
  experience: ParsedContent
}>()
</script>

<template>
  <li>
    <NuxtLink :to="$props.experience._path" class="w-full flex flex-row items-center gap-4">
      <AtomsExperienceImage :image="experience.company" class="shrink-0
      " />
      <dl class="w-full">
        <div class="text-zinc-100 text-sm font-semibold">
          <dt class="sr-only">
            Entreprise
          </dt>
          <dd>
            {{ $props.experience.company.name }}
          </dd>
        </div>
        <div class="flex flex-row justify-between text-xs">
          <dt class="sr-only">
            Poste
          </dt>
          <dd class="text-zinc-400">
            {{ $props.experience.title }}
          </dd>
          <dt class="sr-only">
            Date
          </dt>
          <dd class="text-zinc-500">
            {{ $props.experience.from }} - {{ $props.experience.to }}
          </dd>
        </div>
      </dl>
    </NuxtLink>
  </li>
</template>