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
  <time class="flex flex-row items-center text-base dark:text-zinc-500 font-semibold"
    :datetime="datetime.toISOString()">
    <span class="h-4 w-0.5 rounded-full dark:bg-zinc-500"></span>
    <span class="ml-3">
      {{ datetime.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }) }}
    </span>
  </time>
</template>