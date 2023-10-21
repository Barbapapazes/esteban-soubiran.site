<script lang="ts" setup>
import type { Toc } from '@nuxt/content/dist/runtime/types'
import { NuxtLink } from '#components'

defineProps<{
  toc: Toc
}>()

const { activeHeadings } = useScrollSpyHeadings()

function isActive(id: string) {
  return activeHeadings.value.includes(id)
}
</script>

<template>
  <ul class="text-zinc-500 dark:text-zinc-400 text-sm space-y-2">
    <li v-for="link in toc.links" :key="link.id">
      <ArticlesNavGroupItem :is="NuxtLink" :to="`#${link.id}`" class="block" :class="isActive(link.id) ? 'text-primary!' : ''">
        {{ link.text }}
      </ArticlesNavGroupItem>
      <template v-if="link.children">
        <ul class="ml-2 pl-4 my-2 border-l-1 border-zinc-300 dark:border-zinc-700 space-y-2">
          <li v-for="child in link.children" :key="child.id">
            <ArticlesNavGroupItem :is="NuxtLink" :to="`#${child.id}`" class="block" :class="isActive(child.id) ? 'text-primary!' : ''">
              {{ child.text }}
            </ArticlesNavGroupItem>
          </li>
        </ul>
      </template>
    </li>
  </ul>
</template>
