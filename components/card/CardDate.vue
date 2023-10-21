<script lang="ts" setup>
defineProps<{
  date: string | Date
  dateTerm: string
}>()
</script>

<template>
  <dl class="relative">
    <dt class="sr-only">
      {{ dateTerm }}
    </dt>
    <dd class="text-sm text-zinc-500 dark:text-zinc-400">
      <time :datetime="ISODate(date)">
        {{ formatDate(date) }}
      </time>
    </dd>
  </dl>
</template>
