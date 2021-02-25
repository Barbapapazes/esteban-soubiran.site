<template>
  <div class="rounded-10 shadow-inner-small p-2">
    <img :src="getImage" :alt="alt" class="rounded-5 w-full h-auto mt-0 mb-0" />
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
  computed: {
    getImage() {
      // il faut passer le folder name  et le file name
      return require(`@/assets/${this.src}`)
    },
  },
}
</script>
