<script lang="ts" setup>
defineProps<{
  datetime: string
  withBorder?: boolean
  small?: boolean
}>()
</script>

<template>
  <div class="flex flex-row items-center" :class="{ 'text-sm': small }">
    <span v-if="withBorder" class="h-4 w-0.5 mr-3 rounded-full bg-zinc-500 dark:text-zinc-400" />
    <time
      class="text-zinc-500 dark:text-zinc-400"
      :datetime="ISODate(datetime)"
    >
      <span>
        {{ formatDate(datetime) }}
      </span>
    </time>
  </div>
</template>
