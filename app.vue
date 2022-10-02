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
  <div class="min-h-screen dark:bg-black">
    <div class="absolute inset-0 sm:px-8 lg:px-16">
      <div class="w-full h-full max-w-screen-xl mx-auto dark:bg-zinc-900"></div>
    </div>
    <main class="relative">
      <NuxtPage />
    </main>
    <OrganismsTheFooter class="relative" />
  </div>
</template>