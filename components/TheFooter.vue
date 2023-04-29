<script lang="ts" setup>
const { navigation } = useContent()

const { isActive } = useActivePath()
</script>

<template>
  <footer class="mt-32 sm:px-8 lg:px-16">
    <div class="max-w-screen-xl mx-auto px-8 border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
      <div class="max-w-2xl lg:max-w-5xl mx-auto flex flex-col gap-6 sm:flex-row justify-between items-center sm:items-start">
        <nav aria-labelledby="Navigation secondaire">
          <ul class="grid grid-cols-2 sm:grid-cols-3 md:flex gap-x-6 md:gap-6 text-sm text-center font-medium text-zinc-800 dark:text-zinc-200">
            <li v-for="item in navigation" :key="item._path">
              <NuxtLink
                :to="item._path"
                class="relative block px-3 py-2 transition hover:text-sky-500 hover:dark:text-sky-400 text-sm"
                :class="{ 'text-sky-500 dark:text-sky-400': isActive(item._path) }"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <p class="sm:py-2 text-sm text-zinc-400 dark:text-zinc-500">
          2023
          -
          Estéban Soubiran
        </p>
      </div>
    </div>
  </footer>
</template>
