<script lang="ts" setup>
defineProps<{
  prev: {
    _path: string
    title: string
  } | null
  next: {
    _path: string
    title: string
  } | null
}>()
</script>

<template>
  <div class="w-full max-w-3xl mx-auto grid md:grid-cols-2 gap-4 lg:gap-8">
    <NuxtLink v-if="prev" :to="prev._path" class="w-full p-4 flex flex-row items-center rounded-xl border border-gray-300/40 dark:border-gray-700/40 hover:border-sky-500 hover:dark:border-sky-400 transition">
      <Icon name="heroicons:arrow-left" class="w-4 h-4 mr-2" />
      <span>
        {{ prev.title }}
      </span>
    </NuxtLink>
    <NuxtLink v-if="next" :to="next._path" class="col-start-2 w-full p-4 flex flex-row justify-end items-center rounded-xl border border-gray-300/40 dark:border-gray-700/40 hover:border-sky-500 hover:dark:border-sky-400 transition">
      <span>
        {{ next.title }}
      </span>
      <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-2" />
    </NuxtLink>
  </div>
</template>
