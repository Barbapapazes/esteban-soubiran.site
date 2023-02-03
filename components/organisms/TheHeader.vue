<script lang="ts" setup>
const route = useRoute()
const { navigation } = await useContent()

const isHome = ref(route.path === '/')

watch(route, () => {
  if (route.path === '/') { isHome.value = true } else { isHome.value = false }
})
const isActive = (item: any) => route.fullPath.startsWith(item._path)
</script>

<template>
  <header class="sm:px-8 lg:px-16 w-full">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
      <div class="relative max-w-2xl lg:max-w-5xl mx-auto flex justify-end md:justify-center flex-row items-center">
        <Transition>
          <NuxtLink
            v-if="!isHome"
            to="/"
            class="absolute left-0 h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
          >
            <img
              src="/esteban.webp"
              alt="Photo de profil d'Estéban Soubiran"
              width="36"
              height="36"
              class="block w-9 h-9 rounded-full object-cover backdrop-filter backdrop-blur"
              loading="async"
            >
          </NuxtLink>
        </Transition>

        <div
          class="hidden md:flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
        >
          <nav aria-labelledby="Navigation primaire">
            <ul class="flex flex-row">
              <li v-for="item in navigation" :key="item._path" class="relative">
                <NuxtLink
                  :to="item._path"
                  class="relative block px-3 py-2 transition hover:text-sky-500 hover:dark:text-sky-400 text-base"
                  :class="{ 'text-sky-500 dark:text-sky-400': isActive(item) }"
                >
                  {{ item.title }}
                </NuxtLink>
                <div
                  v-show="isActive(item)"
                  class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-sky-500/0 via-sky-500 to-sky-500/0  dark:from-sky-400/0 dark:via-sky-400 dark:to-sky-400/0 transition"
                />
              </li>
            </ul>
          </nav>
        </div>
        <MoleculesTheHeaderPopover class="md:hidden" />
        <MoleculesColorModeSwitcher class="absolute right-0" />
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
