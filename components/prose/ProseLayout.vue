<script lang="ts" setup>
import type { Toc } from '@nuxt/content/dist/runtime/types'
import type { Resource } from '~/types/resources'

defineProps<{
  title?: string
  date?: string
  toc: Toc
  filename: string
  resources?: Resource[]
}>()
</script>

<template>
  <article class="grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] gap-6">
    <div class="xl:col-start-2 max-w-prose">
      <ProseContentHeader
        :title="title"
        :date="date"
      />
      <AppHr class="mt-8" />
    </div>

    <ProseContentBody class="xl-col-start-2">
      <slot />
    </ProseContentBody>

    <div class="row-start-2 xl:row-start-1 xl:row-span-2 xl:col-start-3">
      <ProseNav :toc="toc" :filename="filename" :resources="resources" class="xl:sticky xl:top-22 xl:overflow-y-auto xl:max-h-[calc(100vh-5.5rem)]" />
      <AppHr class="xl:hidden mt-6" />
    </div>
  </article>
</template>
