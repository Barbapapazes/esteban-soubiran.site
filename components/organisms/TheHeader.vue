<script lang="ts" setup>
const { navigation } = await useContent()
const route = useRoute()

const isHome = ref(route.path === '/')

watch(route, () => {
  if (route.path === '/') { isHome.value = true }
  else { isHome.value = false }
})
</script>

<template>
  <header class="sm:px-8 lg:px-16 w-full">
    <div class="max-w-screen-xl mx-auto px-8">
      <div class="relative max-w-2xl lg:max-w-5xl mx-auto flex justify-end md:justify-center flex-row items-center">
        <Transition>
          <NuxtLink v-if="!isHome" to="/"
            class="absolute left-0 w-10 h-10 flex justify-center items-center ring-1 dark:ring-white/10 rounded-full dark:bg-zinc-800/90">
            <img src="/images/esteban.webp" alt="Photo de profil d'Estéban Soubiran" width="36" height="36"
              class="block w-9 h-9 rounded-full object-cover backdrop-filter backdrop-blur" loading="async">
          </NuxtLink>
        </Transition>

        <div
          class="hidden md:flex rounded-full px-3 shadow-lg shadow-zinc-800/5 ring-1 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
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
        </div>
        <MoleculesTheHeaderPopover class="md:hidden"></MoleculesTheHeaderPopover>
      </div>
    </div>

  </header>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>