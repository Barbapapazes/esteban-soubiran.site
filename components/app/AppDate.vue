<script lang="ts" setup>
const props = defineProps<{
  withBorder?: boolean
  datetime: string
}>()

const date = new Date(props.datetime)

const { formatDate, ISODate } = useDate()
</script>

<template>
  <div class="flex flex-row items-center">
    <span v-if="$props.withBorder" class="h-4 w-0.5 mr-3 rounded-full bg-zinc-400 dark:bg-zinc-500" />
    <time
      class="text-base text-zinc-400 dark:text-zinc-500"
      :datetime="ISODate(date)"
    >
      <span>
        {{ formatDate(date) }}
      </span>
    </time>
  </div>
</template>
