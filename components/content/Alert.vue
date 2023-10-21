<script lang="ts" setup>
type Type = 'info' | 'warning' | 'danger'

defineProps<{
  type: Type
}>()

const typeClasses: Record<Type, string> = {
  info: 'border-1 border-blue-300/40 dark:border-blue-700/40 bg-blue-200/20 dark:bg-blue-700/10 dark:text-blue-50 text-blue-950',
  warning: 'border-1 border-yellow-300/40 dark:border-yellow-700/40 bg-yellow-200/20 dark:bg-yellow-700/10 dark:text-yellow-50 text-yellow-950',
  danger: 'border-1 border-red-300/40 dark:border-red-700/40 bg-red-200/20 dark:bg-red-700/10 dark:text-red-50 text-red-950',
}
</script>

<template>
  <div class="alert text-sm my-8 rounded-xl px-4 py-4" :class="typeClasses[type]">
    <ContentSlot :use="$slots.default" />
  </div>
</template>
