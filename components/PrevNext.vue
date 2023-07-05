<script lang="ts" setup>
const { prev, next } = useContent()
</script>

<template>
  <div class="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-4 lg:gap-8 justify-between">
    <NuxtLink :to="prev._path" class="w-full p-4 flex flex-row items-center rounded-xl border-1 border-zinc-300/40 dark:border-zinc-700/40 hover:text-primary hover:border-primary transition-base">
      <Icon name="heroicons:arrow-left" class="w-4 h-4 mr-2" />
      <span>
        {{ prev.title }}
      </span>
    </NuxtLink>
    <NuxtLink :to="next._path" class="w-full p-4 flex flex-row items-center justify-end rounded-xl border-1 border-zinc-300/40 dark:border-zinc-700/40 hover:text-primary hover:border-primary transition-base">
      <span>
        {{ next.title }}
      </span>
      <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-2" />
    </NuxtLink>
  </div>
</template>
