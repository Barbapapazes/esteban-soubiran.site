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
      <ProseNavGroupItem :is="NuxtLink" :to="`#${link.id}`" class="block" :class="isActive(link.id) ? 'text-sky-500 dark:text-sky-400!' : ''">
        {{ link.text }}
      </ProseNavGroupItem>
      <template v-if="link.children">
        <ul class="ml-2 pl-4 my-2 border-l border-zinc-300 dark:border-zinc-700 space-y-2">
          <li v-for="child in link.children" :key="child.id">
            <ProseNavGroupItem :is="NuxtLink" :to="`#${child.id}`" class="block" :class="isActive(child.id) ? 'text-sky-500 dark:text-sky-400!' : ''">
              {{ child.text }}
            </ProseNavGroupItem>
          </li>
        </ul>
      </template>
    </li>
  </ul>
</template>
