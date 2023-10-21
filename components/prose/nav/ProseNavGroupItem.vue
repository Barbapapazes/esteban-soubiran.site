<script lang="ts" setup>
import type { DefineComponent } from 'vue'

defineProps<{
  is: string | DefineComponent<unknown>
}>()
</script>

<!-- TODO: rename to link -->
<template>
  <component :is="is" class="hover:text-zinc-800 hover:dark:text-zinc-200 transition ease-in">
    <slot />
  </component>
</template>
