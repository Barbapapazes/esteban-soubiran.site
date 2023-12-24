<script lang="ts" setup>
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const sameAs = useSameAs()

const title = props.error.statusCode === 404
  ? 'Page introuvable'
  : 'Erreur'

useSeoMeta({
  title,
  description: 'Nous sommes désolés mais cette page est introuvable.',
})
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
          <h1 class="text-4xl font-bold">
            {{ error.statusCode }}
          </h1>
          <p class="mt-4 text-lg text-gray-500 dark:text-gray-400">
            {{ error.message }}
          </p>
          <UButton class="mt-12" to="/" color="primary" variant="solid" size="sm" :ui="{ variant: { solid: 'shadow-none text-gray-950' } }">
            Retourner à l'accueil
          </UButton>
        </div>
        <main class="relative mt-16 sm:mt-32 text-gray-800 dark:text-gray-100">
          <NuxtPage />
        </main>
        <TheFooter class="relative" />
      </div>
    </Body>
  </Html>
</template>
