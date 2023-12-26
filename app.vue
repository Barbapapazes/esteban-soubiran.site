<script lang="ts" setup>
const sameAs = useSameAs()
</script>

<template>
  <Html dir="ltr" class="h-full font-sans antialiased">
    <Head>
      <SchemaOrgPerson
        name="Estéban Soubiran"
        logo="/esteban.webp"
        :same-as="sameAs"
      />
      <Link rel="icon" href="/favicon.ico" type="image/ico" />
    </Head>
    <Body class="flex h-full flex-col bg-gray-50 dark:bg-black">
      <div class="h-full pt-6">
        <div class="fixed inset-0 sm:px-8 lg:px-16">
          <div
            class="w-full h-full max-w-screen-xl mx-auto ring-1 bg-white ring-gray-100 dark:bg-gray-900 dark:ring-gray-300/20"
          />
        </div>
        <div class="z-50 sticky top-6 flex flex-row justify-center">
          <TheHeader />
        </div>
        <main class="relative mt-16 sm:mt-32 text-gray-800 dark:text-gray-100">
          <NuxtPage />
        </main>
        <TheFooter class="relative" />
      </div>
    </Body>
  </Html>
</template>
