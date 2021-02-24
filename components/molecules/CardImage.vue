<template>
  <div class="rounded-10 shadow-inner-small p-2 mb-1">
    <img :src="src" :alt="alt" class="rounded-5 w-full h-auto" />
  </div>
</template>

<script>
export default {
  name: 'CardImage',
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
  },
}
</script>
