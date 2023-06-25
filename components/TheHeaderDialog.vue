<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay } from '@headlessui/vue'

const { navigation } = useContent()
</script>

<template>
  <Popover class="relative right-14 h-10">
    <!-- <ClientOnly> -->
    <PopoverButton
      class="group h-full flex items-center rounded-full bg-blur px-4 py-2 text-sm font-medium text-content shadow-base border-base hover:ring-zinc-900/10 hover:dark:ring-white/20 transition-base"
    >
      Menu
      <Icon
        class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
        name="heroicons:chevron-down-20-solid"
      />
    </PopoverButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <PopoverOverlay class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100" />
    </transition>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <PopoverPanel
        v-slot="{ close }"
        class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100"
      >
        <div class="flex flex-row-reverse items-center justify-between">
          <button class="-m-1 p-1" @click="close">
            <Icon class="h-6 w-6 text-zinc-500 dark:text-zinc-400" name="heroicons:x-mark-solid" />
          </button>
          <h2 class="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
        <nav class="mt-6">
          <ul
            class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"
            aria-labelledby="Navigation mobile"
          >
            <li v-for="item in navigation" :key="item._path">
              <NuxtLink class="block py-2 cursor-pointer" :to="item._path" @click="close">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </PopoverPanel>
    </transition>
    <!-- </ClientOnly> -->
  </Popover>
</template>
