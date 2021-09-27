<template>
  <div
    v-observe-visibility="{
      callback: visibilityChanged,
      intersection: {
        threshold: 0.2,
      },
      once: true,
    }"
    class="
      p-4
      rounded-xl
      shadow-medium
      font-text
      self-start
      opacity-0
      transform
      translate-y-10
      duration-700
      ease-in-out
    "
    :class="cardClass"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    gap: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cardClass() {
      if (!this.gap) return

      return 'flex flex-col space-y-2 h-full'
    },
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (isVisible) {
        entry.target.classList.add('transition-all')
        entry.target.classList.add('-translate-y-0')
        entry.target.classList.add('opacity-100')
      }
    },
  },
}
</script>
