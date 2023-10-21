<script lang="ts" setup>
const { page } = useContent()
const socials = usePortfolio().value.socials
</script>

<template>
  <AppSection>
    <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <img
            class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            :src="page.cover.src"
            :alt="page.cover.alt"
            width="400"
            height="400"
          >
        </div>
      </div>
      <div class="lg:order-first lg:row-span-2">
        <PageTitle>
          {{ page.pageTitle }}
        </PageTitle>
        <PageProse class="mt-6">
          <slot />
        </PageProse>
      </div>
      <div class="lg:pl-20">
        <ul class="flex flex-col gap-4">
          <li v-for="social in socials" :key="social.url">
            <NuxtLink
              :to="social.url"
              class="group flex flex-row items-center text-sm font-medium transition ease-in text-content hover:text-primary"
            >
              <div
                class="h-6 w-6 flex-none fill-zinc-500 group-hover:fill-sky-500 group-hover:dark:fill-sky-400"
                :class="social.icon"
              />
              <span class="ml-4">
                Me Retrouver sur {{ social.name }}
              </span>
            </NuxtLink>
          </li>
          <li v-if="page.mail" class="mt-4 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
            <NuxtLink
              :to="page.mail.url"
              class="group flex text-sm font-medium text-content hover:text-primary transition ease-in"
            >
              <Icon class="h-6 w-6 flex-none fill-zinc-500 group-hover:fill-teal-500" :name="page.mail.icon" />
              <span class="ml-4">
                {{ page.mail.name }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </AppSection>
</template>
