<template>
  <div
    class="p-2 rounded-10 shadow-medium font-text grid"
    :class="{ 'gap-1': gap }"
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
}
</script>
