<script lang="ts" setup>
const { navigation } = useContent()

const { isHome, isActive } = useActivePath()
</script>

<template>
  <header class="sm:px-8 lg:px-16 w-full">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12">
      <div class="relative max-w-2xl lg:max-w-5xl mx-auto flex justify-end md:justify-center flex-row items-center">
        <Transition>
          <NuxtLink
            v-if="!isHome"
            to="/"
            class="absolute left-0 h-10 w-10 rounded-full bg-blur p-0.5 shadow-base border-base hover:ring-zinc-900/10 hover:dark:ring-white/20 transition-base"
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
          class="hidden md:flex rounded-full bg-blur px-3 text-sm font-medium shadow-base border-base"
        >
          <nav aria-labelledby="Navigation primaire">
            <ul class="flex flex-row text-content">
              <li v-for="item in navigation" :key="item._path" class="relative">
                <NuxtLink
                  :to="item._path"
                  class="relative block px-3 py-2 transition hover:text-primary"
                  :class="{ 'text-primary': isActive(item._path) }"
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
        </div>
        <TheHeaderDialog class="md:hidden" />
        <TheSearch class="absolute right-16" />
        <ColorModeSwitcher class="absolute right-0" />
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
