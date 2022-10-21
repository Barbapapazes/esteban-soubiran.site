<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Estéban Soubiran` : 'Estéban Soubiran';
  },
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
    name: 'Estéban Soubiran',
    image: '/images/esteban.webp',
    sameAs: [
      'https://www.linkedin.com/in/esteban25/',
    ],
  }),
  defineWebSite({
    name: 'Estéban Soubiran',
    url: 'https://esteban-soubiran.site',
    inLanguage: 'fr-FR',
  })
  ,
  defineWebPage(),
])
</script>

<template>
  <div class="h-full pt-6">
    <div class="fixed inset-0 sm:px-8 lg:px-16">
      <div class="w-full h-full max-w-screen-xl mx-auto ring-1 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
    </div>
    <div class="z-50 sticky top-6 flex flex-row justify-center">
      <OrganismsTheHeader />
    </div>
    <main class="relative mt-16">
      <NuxtPage />
    </main>
    <OrganismsTheFooter class="relative" />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s ease-in;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>