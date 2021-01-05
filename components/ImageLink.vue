<template>
  <a :href="$attrs.href"
    ><img
      :src="$attrs.src"
      :alt="$attrs.alt"
      :width="$attrs.width"
      :height="$attrs.height"
  /></a>
</template>

<script>
export default {
  name: 'ImageLink',
  inheritAttrs: false,
}
</script>
