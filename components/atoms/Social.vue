<template>
  <ul>
    <li v-for="link in links" :key="link.href">
      <a :href="link.href" rel="noreferrer noopener" target="_blank">
        <component :is="link.name" class="text-white w-8 h-8 md:w-12 md:h-12" />
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
