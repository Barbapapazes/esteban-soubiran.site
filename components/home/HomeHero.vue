<script lang="ts" setup>
const socials = usePortfolio().socials
</script>

<template>
  <div class="max-w-2xl flex flex-col gap-6">
    <img src="/esteban.webp" alt="Photo de profil d'Estéban" class="rounded-full h-16 w-16">
    <h1 class="text-4xl sm:text-5xl leading-[3.5rem] font-bold tracking-tight text-content">
      <slot name="title" />
    </h1>
    <p class="mt-6 text-base text-reduced">
      <slot name="subtitle" />
    </p>
    <div class="flex flex-row gap-6">
      <NuxtLink v-for="social in socials" :key="social.url" :to="social.url" class="-m-1 p-1 group">
        <span class="sr-only">Profil {{ social.name }}</span>
        <Icon
          class="h-6 w-6 text-reduced transition group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
          :name="social.icon"
        />
      </NuxtLink>
    </div>
  </div>
</template>
