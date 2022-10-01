<script lang="ts" setup>
defineProps<{
  profile: {
    src: string
    alt: string
  }
  github?: string
  devto?: string
  linkedin?: string
  twitter?: string
  instagram?: string
}>()
</script>


<template>
  <section class="max-w-screen-lg mx-auto">
    <div class="max-w-2xl flex flex-col gap-6">
      <img :src="$props.profile.src" :alt="$props.profile.alt" class="rounded-full h-16 w-16">
      <h1 class="text-5xl leading-[3.5rem] font-bold tracking-tight  dark:text-zinc-100">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h1>
      <p class="text-base dark:text-zinc-400">
        <ContentSlot :use="$slots.subtitle" unwrap="p" />
      </p>
      <div class="flex flex-row gap-6">
        <NuxtLink v-if="$props.github" :to="$props.github">
          <Icon class="w-6 h-6 dark:text-zinc-400 dark:hover:text-zinc-300" name="mdi:github" />
        </NuxtLink>
        <NuxtLink v-if="$props.devto" :to="$props.devto">
          <Icon class="w-6 h-6 dark:text-zinc-400 dark:hover:text-zinc-300" name="ic:round-logo-dev" />
        </NuxtLink>
        <NuxtLink v-if="$props.linkedin" :to="$props.linkedin">
          <Icon class="w-6 h-6 dark:text-zinc-400 dark:hover:text-zinc-300" name="mdi:linkedin" />
        </NuxtLink>
        <NuxtLink v-if="$props.twitter" :to="$props.twitter">
          <Icon class="w-6 h-6 dark:text-zinc-400 dark:hover:text-zinc-300" name="mdi:twitter" />
        </NuxtLink>
        <NuxtLink v-if="$props.instagram" :to="$props.instagram">
          <Icon class="w-6 h-6 dark:text-zinc-400 dark:hover:text-zinc-300" name="mdi:instagram" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>