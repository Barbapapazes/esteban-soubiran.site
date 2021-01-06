<template>
  <div class="p-4 md:p-6 rounded-2xl shadow-medium">
    <div class="rounded-5 shadow-inner-small p-2 md:p-4">
      <img :src="src" :alt="alt" class="rounded-5 w-full h-auto" />
    </div>
    <h3 class="font-bold text-white text-2xl md:text-3xl mt-4">
      <slot name="title"></slot>
    </h3>
    <p class="font-text text-light-grey text-lg md:text-xl">
      <slot name="tag"></slot>
    </p>
    <p class="font-text text-light-grey text-lg">
      <slot name="date"></slot>
    </p>
    <div class="flex justify-end mt-2 md:mt-4">
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
