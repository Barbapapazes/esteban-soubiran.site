<script lang="ts" setup>
defineProps<{
  profile: {
    src: string
    alt: string
  }
  // TODO: Add to app config
  socials: {
    name: string
    url: string
    icon: string
  }[]
}>()
</script>

<template>
  <div class="max-w-2xl flex flex-col gap-6">
    <img :src="$props.profile.src" :alt="$props.profile.alt" class="rounded-full h-16 w-16">
    <h1 class="text-4xl sm:text-5xl leading-[3.5rem] font-bold tracking-tight  dark:text-zinc-100">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h1>
    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
      <ContentSlot :use="$slots.subtitle" unwrap="p" />
    </p>
    <div class="flex flex-row gap-6">
      <NuxtLink v-for="social in socials" :key="social.url" :to="social.url" class="-m-1 p-1 group">
        <span class="sr-only">Profil {{ social.name }}</span>
        <Icon
          class="h-6 w-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300"
          :name="social.icon"
        />
      </NuxtLink>
    </div>
  </div>
</template>
