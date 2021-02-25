<template>
  <ul class="grid gap-2">
    <li v-for="item in links" :key="item.name">
      <NuxtLink
        :to="'/#' + item.link"
        class="focus:outline-none focus:ring-white focus:ring-2 rounded-5 p-1 mx-2"
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
