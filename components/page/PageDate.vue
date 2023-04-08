<script lang="ts" setup>
const props = defineProps({
  datetime: {
    type: String,
    required: true
  }
})

const datetime = ref(new Date(props.datetime))
</script>

<template>
  <time class="flex flex-row items-center text-base text-zinc-400 dark:text-zinc-500" :datetime="datetime.toISOString()">
    <span class="h-4 w-0.5 mr-3 rounded-full bg-zinc-400 dark:bg-zinc-500" />
    <span>
      {{ datetime.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) }}
    </span>
  </time>
</template>
