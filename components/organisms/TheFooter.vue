<script lang="ts" setup>
const { navigation } = await useContent()
</script>

<template>
  <footer class="mt-32 sm:px-8 lg:px-16">
    <div class="max-w-screen-xl mx-auto px-8 pb-16 pt-10 border-t border-zinc-700/40">
      <div class="max-w-2xl lg:max-w-5xl mx-auto flex flex-col gap-6 sm:flex-row justify-between items-center">
        <nav aria-labelledby="Navigation secondaire">
          <ul class="flex flex-row gap-6">
            <li v-for="item in navigation" :key="item._path">
              <AtomsAppLink :to="item._path">{{ item.title }}</AtomsAppLink>
            </li>
          </ul>
        </nav>
        <p class="text-zinc-500 text-sm">
          2022
          -
          Estéban Soubiran
        </p>
      </div>
    </div>
  </footer>
</template>