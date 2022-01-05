<template>
  <div
    class="
      flex flex-row
      space-x-2
      md:space-x-4
      p-2
      md:px-4
      rounded
      bg-primary-base
      text-white
      shadow-inner-small
      focus-within:ring-2 focus-within:ring-white
    "
    :class="{ 'items-center': center }"
  >
    <label :for="name">
      <slot></slot>
    </label>
    <slot
      :id="name"
      name="input"
      :className="getInputClass"
      :value="value"
      :input="textInput"
      :type="type"
      :inputName="name"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getInputClass() {
      return 'flex-1 placeholder-white bg-transparent focus:outline-none rounded-none'
    },
  },
  methods: {
    textInput(event) {
      this.$emit('input', event.target.value)
    },
  },
}
</script>
