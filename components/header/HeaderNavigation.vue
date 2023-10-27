<script lang="ts" setup>
const { navigation } = useContent()
const { isActive } = useActivePath()
</script>

<template>
  <HeaderItem class="px-3">
    <nav aria-labelledby="Navigation primaire">
      <ul class="flex flex-row font-medium text-zinc-800 dark:text-zinc-100 text-sm">
        <li v-for="item in navigation" :key="item._path" class="relative">
          <NuxtLink
            :to="item._path"
            class="relative block px-3 py-2 transition hover:text-sky-500 hover:dark:text-sky-400"
            :class="{ 'text-sky-500 dark:text-sky-400': isActive(item._path) }"
          >
            {{ item.title }}
          </NuxtLink>
          <div
            v-show="isActive(item._path)"
            class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-sky-500/0 via-sky-500 to-sky-500/0  dark:from-sky-400/0 dark:via-sky-400 dark:to-sky-400/0 transition"
          />
        </li>
      </ul>
    </nav>
  </HeaderItem>
</template>
