<template>
  <ul>
    <li v-for="link in links" :key="link.href">
      <a
        :href="link.href"
        rel="noreferrer noopener"
        target="_blank"
        class="
          focus:outline-none
          w-8
          md:w-12
          focus:ring-white focus:ring-2
          p-1
          h-8
          md:h-12
          block
          rounded-md
        "
      >
        <component
          :is="link.name"
          class="
            text-white
            hover:text-grey-primary-light
            w-full
            h-full
            transition
          "
        />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Social',
  props: {
    links: {
      type: Array,
      default: () => [],
    },
    size: {
      type: Number,
      default: 48,
    },
  },
}
</script>
