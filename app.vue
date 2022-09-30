<script lang="ts" setup>
useSchemaOrg([
  definePerson({
    name: 'Estéban Soubiran'
  }),
  defineWebSite({
    name: 'Estéban Soubiran',
    sameAs: [
      'https://www.linkedin.com/in/esteban25/',
    ],
  })
  ,
  defineWebPage(),
])
</script>

<template>
  <NuxtPage />
</template>