<template>
  <h2
    v-observe-visibility="
      observe
        ? {
            callback: visibilityChanged,
            intersection: {
              threshold: 0.8,
            },
            once: true,
          }
        : false
    "
    class="text-4xl md:text-6xl text-white font-text"
    :class="addObserveClass"
  >
    <span class="mr-2">&#60;</span><slot></slot
    ><span class="ml-2"> &#47;&#62;</span>
  </h2>
</template>

<script>
export default {
  name: 'Title',
  props: {
    observe: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    addObserveClass() {
      return this.observe
        ? 'opacity-0 transform translate-x-5 duration-500 ease-in-out'
        : ''
    },
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        entry.target.classList.add('transition-all')
        entry.target.classList.add('-translate-x-0')
        entry.target.classList.add('opacity-100')
      }
    },
  },
}
</script>
