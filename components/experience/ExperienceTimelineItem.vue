<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  experience: ParsedContent
}>()
</script>

<template>
  <li>
    <NuxtLink :to="$props.experience._path" class="w-full flex flex-row items-center gap-4">
      <ExperienceImage
        small
        :image="experience.company"
        class="shrink-0
      "
      />
      <dl class="flex flex-auto flex-wrap gap-x-2">
        <dt class="sr-only">
          Entreprise
        </dt>
        <dd class="w-full flex-none text-sm font-medium text-content">
          {{ $props.experience.company.name }}
        </dd>
        <dt class="sr-only">
          Poste
        </dt>
        <dd class="text-xs text-reduced">
          {{ $props.experience.title }}
        </dd>
        <dt class="sr-only">
          Date
        </dt>
        <dd class="ml-auto text-xs text-reduced">
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
