<script lang="ts" setup>
import { PopoverOverlay, PopoverPanel } from '@headlessui/vue'

defineProps<{
  open: boolean
}>()

const { navigation } = useContent()
</script>

<template>
  <transition
    enter-active-class="duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-100 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <PopoverOverlay class="fixed inset-0 backdrop-blur-sm bg-white/1" />
  </transition>

  <transition
    enter-active-class="duration-200 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-100 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <PopoverPanel
      v-slot="{ close }"
      class="fixed inset-x-4 top-8 p-8 z-50 bg-white/90 dark:bg-zinc-800/90 rounded-2xl border-base shadow-xl text-content"
    >
      <div class="flex flex-row-reverse items-center justify-between text-reduced">
        <button class="-m-1 p-1" @click="close">
          <Icon class="h-6 w-6" name="heroicons:x-mark-solid" />
        </button>
        <h2 class="text-sm font-medium">
          Navigation
        </h2>
      </div>
      <nav class="mt-6">
        <ul
          class="-my-2 text-base text-content divide-y divide-zinc-900/2 dark:divide-white/5"
          aria-labelledby="Navigation mobile"
        >
          <li v-for="item in navigation" :key="item._path">
            <NuxtLink class="block py-2 hover:text-primary" :to="item._path" @click="close">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </PopoverPanel>
  </transition>
</template>
