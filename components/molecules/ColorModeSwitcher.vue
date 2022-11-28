<script lang="ts" setup>
const colorMode = useColorMode()

const toggleColor = () => {
  if (colorMode.value === 'light') {
    colorMode.preference = 'dark'
  }
  else {
    colorMode.preference = 'light'
  }
}

const attrs = useAttrs()
</script>

<template>
  <ClientOnly>
    <button @click="toggleColor()" label="Changer le thème" v-bind="attrs"
      class="group rounded-full bg-white/90 h-10 w-10 flex justify-center items-center shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
      <Transition name="fade" mode="out-in">
        <Icon v-if="$colorMode.value === 'dark'" name="heroicons:moon"
          class="hidden h-5 w-5 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-sky-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-sky-500" />
        <Icon v-else-if="$colorMode.value === 'light'" name="heroicons:sun"
          class="h-5 w-5 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-sky-50 [@media(prefers-color-scheme:dark)]:stroke-sky-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-sky-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-sky-600" />
      </Transition>
    </button>
  </ClientOnly>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button :deep(path) {
  stroke: inherit;
  fill: inherit;
}
</style>