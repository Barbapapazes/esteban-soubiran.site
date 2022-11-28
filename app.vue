<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    if (titleChunk === 'Estéban Soubiran')
      return titleChunk

    return `${titleChunk} · Estéban Soubiran`
  },
  htmlAttrs: {
    lang: 'fr-FR',
    class: 'h-full font-sans antialiased',
  },
  bodyAttrs: {
    class: 'flex h-full flex-col bg-zinc-50 dark:bg-black',
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
      'https://twitter.com/esteban_dev_',
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
      <div
        class="w-full h-full max-w-screen-xl mx-auto ring-1 bg-white ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
      </div>
    </div>
    <div class="z-50 sticky top-6 flex flex-row justify-center">
      <OrganismsTheHeader />
    </div>
    <main class="relative mt-16 sm:mt-32">
      <NuxtPage />
    </main>
    <OrganismsTheFooter class="relative" />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.15s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>