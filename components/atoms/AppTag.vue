<template>
  <span class="text-white text-sm md:text-lg">#{{ word }}</span>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      default: '',
    },
  },
}
</script>
