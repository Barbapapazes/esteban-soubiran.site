<template>
  <div class="max-w-2xl flex flex-col gap-6">
    <img src="/esteban.webp" alt="Photo de profil d'Estéban" class="rounded-full h-16 w-16">
    <h1 class="text-4xl sm:text-5xl leading-[3.5rem] sm:leading-[3.5rem] font-bold tracking-tight">
      <slot name="title" />
    </h1>
    <p class="mt-6 text-base text-zinc-500 dark:text-zinc-400">
      <slot name="subtitle" />
    </p>
    <FollowMe space="gap-6" size="h-6 w-6" />
  </div>
</template>
