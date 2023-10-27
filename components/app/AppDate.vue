<script lang="ts" setup>
const props = defineProps<{
  datetime: string
  withBorder?: boolean
  small?: boolean
}>()

const date = new Date(props.datetime)

const { formatDate, ISODate } = useDate()
</script>

<template>
  <div class="flex flex-row items-center" :class="{ 'text-sm': small }">
    <span v-if="withBorder" class="h-4 w-0.5 mr-3 rounded-full bg-zinc-500 dark:text-zinc-400" />
    <time
      class="text-zinc-500 dark:text-zinc-400"
      :datetime="ISODate(date)"
    >
      <span>
        {{ formatDate(date) }}
      </span>
    </time>
  </div>
</template>
