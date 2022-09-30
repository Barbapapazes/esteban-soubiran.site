<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'fr',
    class: 'font-sans antialiased',
  },
  bodyAttrs: {
    class: 'dark',
  },
})

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
  <div class="bg-black">
    <main>
      <NuxtPage />
    </main>
    <OrganismsTheFooter />
  </div>
</template>