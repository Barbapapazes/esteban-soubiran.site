<script lang="ts" setup>
import type { Toc } from '@nuxt/content/dist/runtime/types'
import type { Resource } from '~/types/resources'
import { NuxtLink } from '#components'

const props = defineProps<{
  filename: string
  resources?: Resource[]
  toc: Toc
}>()

const github = usePortfolio().value.github

const communityLinks = [
  {
    name: 'Aimer sur GitHub',
    to: 'https://github.com/barbapapazes/esteban-soubiran.site',
    class: 'i-heroicons-star-20-solid',
  },
  {
    name: 'Éditer la page',
    to: `https://github.com/${github.owner}/edit/${github.branch}/content/${props.filename}`,
    class: 'i-heroicons-pencil-square-20-solid',
  },
]
</script>

<template>
  <nav class="space-y-6 divide-y divide-zinc-200 dark:divide-zinc-800">
    <ProseNavGroup icon="i-heroicons-list-bullet-20-solid">
      <template #title>
        Sommaire
      </template>
      <ProseNavToc :toc="toc" />
    </ProseNavGroup>
    <ProseNavGroup v-if="resources" class="pt-6" icon="i-heroicons-inbox-20-solid">
      <template #title>
        Ressources
      </template>
      <div class="space-y-2">
        <ProseNavGroupItem :is="NuxtLink" v-for="resource in resources" :key="resource.name" :to="resource.url" target="_blank" rel="noopener" class="flex items-start gap-2">
          <div class="flex items-center gap-2">
            <div class="w-4 h-4" :class="resource.icon" />
            {{ resource.name }}
          </div>
          <div class="i-heroicons-arrow-up-right-20-solid w-3 h-3" />
        </ProseNavGroupItem>
      </div>
    </ProseNavGroup>
    <ProseNavGroup class="pt-6" icon="i-heroicons-user-group-20-solid">
      <template #title>
        Communauté
      </template>
      <div class="space-y-2">
        <ProseNavGroupItem :is="NuxtLink" v-for="link in communityLinks" :key="link.name" :to="link.to" target="_blank" rel="noopener" class="flex items-start gap-2">
          <div class="flex items-center gap-2">
            <div class="w-4 h-4" :class="link.class" />
            {{ link.name }}
          </div>
          <div class="i-heroicons-arrow-up-right-20-solid w-3 h-3" />
        </ProseNavGroupItem>
      </div>
    </ProseNavGroup>
  </nav>
</template>
