<script lang="ts" setup>
const colorMode = useColorMode()

const toggleColor = () => {
  if (colorMode.value === 'light') {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
}

const attrs = useAttrs()
</script>

<template>
  <HeaderItem
    as="button"
    type="button"
    title="Changer le thème"
    v-bind="attrs"
    class="group h-10 w-10 flex justify-center items-center text-reduced"
    hover
    @click="toggleColor()"
  >
    <ClientOnly fallback="...">
      <Transition name="fade" mode="out-in">
        <Icon
          v-if="$colorMode.value === 'dark'"
          name="heroicons:moon"
          class="h-5 w-5 stroke-zinc-500 group-hover:stroke-zinc-400 fill-sky-400/10 transition-base"
        />
        <Icon
          v-else-if="$colorMode.value === 'light'"
          name="heroicons:sun"
          class="h-5 w-5 fill-sky-50 stroke-sky-500 group-hover:stroke-sky-600 transition-base"
        />
      </Transition>
    </ClientOnly>
  </HeaderItem>
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
