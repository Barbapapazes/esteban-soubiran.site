<script lang="ts" setup>
defineProps<{
  image: {
    src: string
    alt: string
  },
  socials: {
    name: string
    url: string
    icon: string
  }[],
  mail: {
    name: string,
    url: string,
    icon: string
  },
}>()
</script>

<template>
  <AppSection>
    <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <img class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            :src="$props.image.src" :alt="$props.image.alt">
        </div>
      </div>
      <div class="lg:order-first lg:row-span-2">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </h1>
        <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <ContentSlot :use="$slots.content" />
        </div>
      </div>
      <div class="lg:pl-20">
        <ul class="flex flex-col gap-4">
          <li v-for="social in $props.socials" :key="social.url" class="flex">
            <NuxtLink :to="social.url"
              class="group flex text-sm font-medium text-zinc-800 transition ease-in hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500">
              <Icon class="h-6 w-6 flex-none fill-zinc-500 group-hover:fill-teal-500" :name="social.icon" />
              <span class="ml-4">
                {{ social.name }}
              </span>
            </NuxtLink>
          </li>
          <li v-if="$props.mail" class="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
            <NuxtLink :to="$props.mail.url"
              class="group flex text-sm font-medium text-zinc-800 transition ease-in hover:text-sky-500 dark:text-zinc-200 dark:hover:text-sky-500">
              <Icon class="h-6 w-6 flex-none fill-zinc-500 group-hover:fill-teal-500" :name="$props.mail.icon" />
              <span class="ml-4">
                {{ $props.mail.name }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </AppSection>
</template>