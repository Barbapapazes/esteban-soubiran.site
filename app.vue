<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'fr',
    class: 'h-full font-sans antialiased dark',
  },
  bodyAttrs: {
    class: 'h-full flex flex-col dark:bg-black',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico',
    },
  ],
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
  <div class="h-full pt-6">
    <div class="fixed inset-0 sm:px-8 lg:px-16">
      <div class="w-full h-full max-w-screen-xl mx-auto dark:bg-zinc-900"></div>
    </div>
    <div class="z-90 sticky top-6 flex flex-row justify-center">
      <OrganismsTheHeader />
    </div>
    <main class="relative mt-16">
      <NuxtPage />
    </main>
    <OrganismsTheFooter class="relative" />
  </div>
</template>