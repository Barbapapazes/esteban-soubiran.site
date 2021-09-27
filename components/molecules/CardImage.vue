<template>
  <div class="rounded-xl shadow-inner-small p-4">
    <img
      :src="getImage"
      :alt="alt"
      loading="lazy"
      class="rounded-md w-full h-auto mt-0 mb-0"
    />
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
