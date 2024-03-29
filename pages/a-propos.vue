<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

const socials = usePortfolio().value.socials
</script>

<template>
  <AppPage>
    <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <img
            class="aspect-square rotate-3 rounded-2xl bg-gray-100 object-cover dark:bg-gray-800"
            :src="page.cover.src"
            :alt="page.cover.alt"
            width="400"
            height="400"
          >
        </div>
      </div>
      <div class="lg:order-first lg:row-span-2">
        <AppPageTitle :text="page.pageTitle" />
        <ProseContentBody class="mt-6">
          <ContentRenderer :value="page" />
        </ProseContentBody>
      </div>
      <div class="lg:pl-20">
        <ul class="flex flex-col gap-4">
          <li v-for="social in socials" :key="social.url">
            <NuxtLink
              :to="social.url"
              class="group flex flex-row items-center text-sm font-medium transition ease-in text-gray-800 dark:text-gray-100 hover:text-sky-500 hover:dark:text-sky-400"
            >
              <div
                class="h-6 w-6 flex-none fill-gray-500 group-hover:fill-sky-500 group-hover:dark:fill-sky-400"
                :class="social.icon"
              />
              <span class="ml-4">
                Me Retrouver sur {{ social.name }}
              </span>
            </NuxtLink>
          </li>
          <li v-if="page.mail" class="mt-4 border-t border-gray-100 pt-8 dark:border-gray-700/40 flex">
            <NuxtLink
              :to="page.mail.url"
              class="group flex text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-sky-500 hover:dark:text-sky-400 transition ease-in"
            >
              <Icon class="h-6 w-6 flex-none fill-gray-500 group-hover:fill-teal-500" :name="page.mail.icon" />
              <span class="ml-4">
                {{ page.mail.name }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </AppPage>
</template>
