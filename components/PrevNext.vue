<script lang="ts" setup>
const { prev, next } = useContent()
</script>

<template>
  <div class="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-4 lg:gap-8 justify-between">
    <NuxtLink :to="prev._path" class="w-full p-4 flex flex-row items-center rounded-xl border border-zinc-300/40 dark:border-zinc-700/40 hover:border-sky-500 hover:dark:border-sky-400 transition">
      <Icon name="heroicons:arrow-left" class="w-4 h-4 mr-2" />
      <span>
        {{ prev.title }}
      </span>
    </NuxtLink>
    <NuxtLink :to="next._path" class="w-full p-4 flex flex-row justify-end items-center rounded-xl border border-zinc-300/40 dark:border-zinc-700/40 hover:border-sky-500 hover:dark:border-sky-400 transition">
      <span>
        {{ next.title }}
      </span>
      <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-2" />
    </NuxtLink>
  </div>
</template>
