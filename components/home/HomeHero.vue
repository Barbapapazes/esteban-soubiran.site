<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="max-w-2xl flex flex-col gap-6">
    <img src="/esteban.webp" alt="Photo de profil d'Estéban" class="rounded-full h-16 w-16">
    <h1 class="text-4xl sm:text-5xl leading-[3.5rem] sm:leading-[3.5rem] font-bold tracking-tight">
      {{ title }}
    </h1>
    <p class="mt-6 text-base text-gray-500 dark:text-gray-400">
      {{ description }}
    </p>
    <FollowMe space="gap-6" size="h-6 w-6" />
  </div>
</template>
