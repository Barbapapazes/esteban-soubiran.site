<template>
  <Html dir="ltr" class="h-full font-sans antialiased">
    <Head>
      <SeoKit />
      <SchemaOrgPerson
        name="Estéban Soubiran'"
        logo="/esteban.webp"
        :same-as="[
          'https://www.linkedin.com/in/esteban25/',
          'https://twitter.com/esteban_dev_'
        ]"
      />
    </Head>
    <Body class="flex h-full flex-col bg-zinc-50 dark:bg-black">
      <div class="h-full pt-6">
        <div class="fixed inset-0 sm:px-8 lg:px-16">
          <div
            class="w-full h-full max-w-screen-xl mx-auto ring-1 bg-white ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"
          />
        </div>
        <div class="z-50 sticky top-6 flex flex-row justify-center">
          <OrganismsTheHeader />
        </div>
        <main class="relative mt-16 sm:mt-32">
          <NuxtPage />
        </main>
        <OrganismsTheFooter class="relative" />
      </div>
    </Body>
  </Html>
</template>
