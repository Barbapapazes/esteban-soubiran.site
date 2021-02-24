<template>
  <transition
    name="expand"
    @enter="enter"
    @afterenter="afterEnter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'TransitionExpand',
  methods: {
    afterEnter(element) {
      element.style.height = 'auto'
    },
    enter(element) {
      const width = getComputedStyle(element).width

      element.style.width = width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'

      const height = getComputedStyle(element).height
      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 0

      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line
      getComputedStyle(element).height

      requestAnimationFrame(() => {
        element.style.height = height
      })
    },
    leave(element) {
      const height = getComputedStyle(element).height

      element.style.height = height
      // Force repaint to make sure the
      // animation is triggered correctly.
      // eslint-disable-next-line
      getComputedStyle(element).height

      requestAnimationFrame(() => {
        element.style.height = 0
      })
    },
  },
}
</script>
