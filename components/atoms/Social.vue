<template>
  <ul class="flex flex-row justify-around">
    <li v-for="link in links" :key="link.href">
      <a :href="link.href" rel="noreferrer noopener" target="_blank"
        ><img :src="link.src" :alt="link.alt" :width="size" :height="size"
      /></a>
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
