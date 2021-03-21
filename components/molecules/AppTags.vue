<template>
  <ul class="flex flex-row flex-wrap font-text">
    <li v-for="(word, index) in words" :key="index" class="pr-2">
      <AppTag :word="word" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
