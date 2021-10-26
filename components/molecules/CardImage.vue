<template>
  <div class="rounded-xl shadow-inner-small p-4">
    <NuxtImg
      :src="src"
      :alt="alt"
      width="768"
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
}
</script>
