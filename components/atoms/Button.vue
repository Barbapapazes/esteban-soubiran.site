<template>
  <button
    class="font-text text-white text-sm rounded-5 py-2 px-4 uppercase transition-shadow duration-300 hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-white"
    :type="type"
  >
    <span class="mr-2">&#60;</span><slot></slot><span class="ml-2">&#62;</span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: '',
    },
  },
}
</script>
