<template>
  <div class="p-2 rounded-10 shadow-medium font-text grid gap-1">
    <div class="rounded-10 shadow-inner-small p-2 mb-1">
      <img :src="src" :alt="alt" class="rounded-5 w-full h-auto" />
    </div>
    <h3 class="text-white">
      <slot name="title"></slot>
    </h3>
    <p class="text-light-grey text-sm">
      <slot name="tag"></slot>
    </p>
    <p class="text-light-grey text-sm">
      <slot name="date"></slot>
    </p>
    <div class="flex justify-end pt-1">
      <Btn>
        <slot name="btn"></slot>
      </Btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  inheritAttrs: false,
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
