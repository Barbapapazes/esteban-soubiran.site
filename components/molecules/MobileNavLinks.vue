<template>
  <ul class="grid gap-2 md:grid-flow-col md:auto-cols-max font-text text-white">
    <li v-for="item in links" :key="item.name">
      <NuxtLink
        :to="'/#' + item.link"
        class="
          focus:outline-none focus:ring-white focus:ring-2
          rounded-5
          p-1
          mx-2
          md:mx-0
        "
        >{{ item.name }}</NuxtLink
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MobileNavLinks',
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
