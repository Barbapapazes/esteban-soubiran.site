<script lang="ts" setup>
useSchemaOrg([
  defineWebSite({
    name: 'Estéban Soubiran',
  })
  ,
  defineWebPage(),
])

</script>

<template>
  <slot />
</template>