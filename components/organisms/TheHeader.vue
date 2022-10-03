<script lang="ts" setup>
const navigation = await fetchContentNavigation()
const route = useRoute()
</script>

<template>
  <header
    class="rounded-full px-3 shadow-lg shadow-zinc-800/5 ring-1 backdrop-filter backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
    <nav aria-labelledby="Navigation primaire">
      <ul class="flex flex-row">
        <li v-for="item in navigation" :key="item._path" class="relative">
          <AtomsAppLink large :to="item._path">{{ item.title }}</AtomsAppLink>
          <div v-show="route.path === item._path"
            class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r dark:from-sky-500/0 dark:via-sky-500 dark:to-sky-500/0 transition">
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>