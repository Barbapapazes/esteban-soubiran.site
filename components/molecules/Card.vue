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
      p-2
      md:p-5
      rounded-10
      shadow-medium
      font-text
      self-start
      opacity-0
      transform
      translate-y-10
      duration-700
      ease-in-out
    "
    :class="{ 'gap-2': gap, grid: gap }"
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
