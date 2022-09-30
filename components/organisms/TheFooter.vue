<script lang="ts" setup>
const navigation = await fetchContentNavigation()
</script>

<template>
  <footer class="max-w-screen-xl mx-auto pb-16 pt-10 border-t border-zinc-700/40">
    <div class="max-w-screen-lg mx-auto flex flex-row justify-between items-center">
      <nav aria-labelledby="Navigation secondaire">
        <ul>
          <li v-for="item in navigation" :key="item._path">
            <AtomsAppLink to="about">{{ item.title }}</AtomsAppLink>
          </li>
        </ul>
      </nav>
      <p class="text-zinc-500 text-sm">
        2022
        -
        Estéban Soubiran
      </p>
    </div>
  </footer>
</template>