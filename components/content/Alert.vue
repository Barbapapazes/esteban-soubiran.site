<script lang="ts" setup>
type Type = 'info' | 'warning' | 'danger'

defineProps<{
  type: Type
}>()

const typeClasses: Record<Type, string> = {
  info: 'border-1 border-blue-300/40 dark:border-blue-700/40 bg-blue-300/20 dark:bg-blue-700/20 dark:text-blue-100 text-blue-950',
  warning: 'border-1 border-yellow-300/40 dark:border-yellow-700/40 bg-yellow-300/20 dark:bg-yellow-700/20 dark:text-yellow-100 text-yellow-950',
  danger: 'border-1 border-red-300/40 dark:border-red-700/40 bg-red-300/20 dark:bg-red-700/20 dark:text-red-100 text-red-950'
}
</script>

<template>
  <div class="alert text-sm my-8 rounded-xl px-4 py-4" :class="typeClasses[type]">
    <ContentSlot :use="$slots.default" />
  </div>
</template>
