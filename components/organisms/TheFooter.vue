<script lang="ts" setup>
const { navigation } = await useContent()
</script>

<template>
  <footer class="mt-32 sm:px-8 lg:px-16">
    <div class="max-w-screen-xl mx-auto px-8 border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
      <div class="max-w-2xl lg:max-w-5xl mx-auto flex flex-col gap-6 sm:flex-row justify-between items-center">
        <nav aria-labelledby="Navigation secondaire">
          <ul class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            <li v-for="item in navigation" :key="item._path">
              <AtomsAppLink :to="item._path">{{ item.title }}</AtomsAppLink>
            </li>
          </ul>
        </nav>
        <p class="text-sm text-zinc-400 dark:text-zinc-500">
          2022
          -
          Estéban Soubiran
        </p>
      </div>
    </div>
  </footer>
</template>