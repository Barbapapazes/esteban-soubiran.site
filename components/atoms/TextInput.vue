<template>
  <div
    class="flex bg-deep-blue text-white rounded-5 shadow-inner-small flex-grow p-1"
    :class="{ 'items-center': center }"
  >
    <label :for="name" class="m-1">
      <slot></slot>
    </label>
    <slot
      :id="name"
      name="input"
      :className="getInputClass"
      :type="type"
      :inputName="name"
      :placeholder="placeholder"
    >
      <input
        :id="name"
        :type="type"
        :name="name"
        :class="getInputClass"
        :placeholder="placeholder"
      />
    </slot>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
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
      return 'flex-1 placeholder-light-grey bg-transparent focus:ring-white focus:ring-2 focus:outline-none rounded-none rounded-r-5 p-1 -mr-1'
    },
  },
}
</script>
