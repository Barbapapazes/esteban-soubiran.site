<script lang="ts" setup>
import { ConcreteComponent } from 'nuxt/dist/app/compat/capi'

defineProps<{
  as?: string | ConcreteComponent
  hover?: boolean
}>()
</script>

<template>
  <component :is="as ?? 'div'" class="rounded-full bg-blur shadow-base border-base" :class="{ 'hover:ring-zinc-900/10 hover:dark:ring-white/20 transition-base': hover }">
    <slot />
  </component>
</template>
