<script lang="ts" setup>
defineProps<{
  profile: {
    src: string
    alt: string
  }
  socials?: {
    name: string
    url: string
    icon: string
  }[]
}>()
</script>


<template>
  <section class="sm:px-8 lg:px-16">
    <div class="max-w-screen-xl mx-auto px-8">
      <div class="max-w-2xl lg:max-w-5xl mx-auto">
        <div class="max-w-2xl flex flex-col gap-6">
          <img :src="$props.profile.src" :alt="$props.profile.alt" class="rounded-full h-16 w-16">
          <h1 class="text-4xl sm:text-5xl leading-[3.5rem] font-bold tracking-tight  dark:text-zinc-100">
            <ContentSlot :use="$slots.title" unwrap="p" />
          </h1>
          <p class="text-base dark:text-zinc-400">
            <ContentSlot :use="$slots.subtitle" unwrap="p" />
          </p>
          <div class="flex flex-row gap-6">
            <NuxtLink v-for="social in $props.socials" :to="social.url">
              <span class="sr-only">Profil {{ social.name }}</span>
              <Icon class="w-6 h-6 dark:text-zinc-400 dark:hover:text-zinc-300" :name="social.icon" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>